import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, DropdownButton, FormGroup, FormControl, FormLabel, InputGroup } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faUndo, faUpload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import TextCopyIcon from '../utils/text-copy-icon.js';

class CurrencyCardView extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;
		
		this.uuid = this.app.guid();

		this.callparams = null;

		this.card = null;
		this.currency = null;

		this.currencycards = [];
		
		this.checking = false;
		this.closing = false;

		this.state = {
			creditbalance: 'loading...',
			position: null,
			position_int: -1,
			position_string: 'loading...',
			address_string: 'loading...',
			privatekey_string: 'loading...',
			web3providerurl_string: 'loading...',
			message_text: 'loading...',

			to_address: '',
			transfer_amount: 0,
			credit_amount: 0,

			need_credit_units: false,
			credit_units_requested: 0,

			priceinfo: '',
			sourcecard: null,

			return_url: null,
			callback_url: null,

			processinginfo: 'processing transfer',
			processing: false
		};
	}


	_setState(state) {
		if (this.closing !== true)
		this.setState(state);
	}

	async _readCurrencyCards() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let currency = this.currency;

		if (!currency)
			return Promise.reject('currency is not defined');

		var cards = [];

		let _currencycards = await mvcmyquote.getCurrencyCardList(rootsessionuuid, walletuuid, currency.uuid);

		// enrich items
		for (var j = 0; j < _currencycards.length; j++) {
	
			_currencycards[j].currency = currency;
			_currencycards[j].currencyuuid = currency.uuid;

			var _privkey = await mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, _currencycards[j].uuid).catch(err => {});
			_currencycards[j].cansign = (_privkey ? true : false);

			let pos = await mvcmyquote.getCurrencyPosition(rootsessionuuid, walletuuid, currency.uuid, _currencycards[j].uuid);
		
			if (pos !== undefined) {
				_currencycards[j].balance_int = await pos.toInteger();
				_currencycards[j].balance_string = await mvcmyquote.formatCurrencyAmount(rootsessionuuid, currency.uuid, pos);
			}

			let credits = await mvcmyquote.getCreditBalance(rootsessionuuid, walletuuid, _currencycards[j].uuid);
			
			_currencycards[j].credits = credits;
		}

		cards = _currencycards;

		return cards;		
	}
	
	async _filterCreditPositiveCards() {
		let items = [];
		let cards = this.currencycards;

		for (var i = 0; i < cards.length; i++) {
			if (cards[i].cansign !== true)
				continue;

			let credit_balance = (cards[i].credits ? cards[i].credits.transactionunits : 0);
			let credit_threshold = (cards[i].credits ?  cards[i].credits.threshold : 0);

			if (credit_balance > credit_threshold) {
				items.push(cards[i]);
			}
		}

		return items;
	}

	
	// post render commit phase
	_getCreditsUnitsRequested(credit_units_requested) {
		return parseInt((credit_units_requested > 0 ? credit_units_requested : 10));
	}

	_getCreditsUnitsToBuy(credit_units_requested) {
		return this._getCreditsUnitsRequested(credit_units_requested) + 3;
	}

	async _getPriceInfo(price_struct) {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

		let currency = this.currency;
		let currencyuuid = currency.uuid;

		let currencyamount = price_struct.currency_amount
		let currencyamount_string = await currencyamount.toDecoratedString();

		let priceinfo = price_struct.credit_units_requested + ' ' + mvcmyquote.t('transaction units will cost you approximately') + ' ' + currencyamount_string;
		
		return priceinfo;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('CurrencyCardView.componentDidUpdate called');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		// entered a new address
		if (this.state.to_address != prevState.to_address) {
		}


		// entered a new credit units
		if (this.state.credit_units_requested != prevState.credit_units_requested) {
			// check it's a proper positive integer
			let proper_int_string = String(Math.floor(Number(this.state.credit_units_requested)));
			
			if (proper_int_string != String(this.state.credit_units_requested)) {
				this._setState({credit_units_requested: proper_int_string});
			}

			// update price info
			let currency = this.currency;
			let currencyuuid = currency.uuid;
			let credit_units_requested = this.state.credit_units_requested;
			let priceinfo = '';;

			if (currency && currency.ops && (currency.ops.cantxfree !== true) && (currency.ops.cantopup !== true) && (currency.ops.canswap === true)) {
				// check price to buy requested amount of credit units
				mvcmyquote.getPriceForCreditUnits(rootsessionuuid, currencyuuid, this._getCreditsUnitsToBuy(credit_units_requested))
				.then(price_struct => {
					price_struct.credit_units_requested = this._getCreditsUnitsRequested(credit_units_requested);

					return this._getPriceInfo(price_struct);

				})
				.then(priceinfo => {
					this._setState({priceinfo});
				})
				.catch(err => {
					console.log('error in CurrencyCardView.componentDidUpdate: ' + err);
				})
			}


		}

		// entered a new token amount
		if (this.state.transfer_amount != prevState.transfer_amount) {
			// check it's a proper decimal
			let currencyuuid = (this.currency ? this.currency.uuid : null);

			if (currencyuuid) {
/* 				let properdecimalamount;
				let proper_decimal_string;

				mvcmyquote.getCurrencyAmount(rootsessionuuid, currencyuuid, this.state.transfer_amount)
				.then(currencyamount => {
					return currencyamount.getDecimalAmount();
				})
				.then(decimalamount => {
					properdecimalamount = decimalamount;
					return decimalamount.toFixedString();
				})
				.then(decimalamountstring => {
					proper_decimal_string = decimalamountstring;
					return mvcmyquote.getDecimalAmount(rootsessionuuid, this.state.transfer_amount);
				})
				.then(decimalamount => {
					return properdecimalamount.equals(decimalamount);
				})
				.then(areequals => {
					if (areequals !== true) {
						this._setState({transfer_amount: proper_decimal_string});
					}
				})
				.catch(err => {
					console.log('error in CurrencyCardView.componentDidUpdate: ' + err);
				}); */
			}
		}

	}

	componentDidMount() {
		console.log('CurrencyCardView.componentDidMount called');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
				
		mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));

		this.checkNavigationState().catch(err => {console.log('error in CurrencyCardView.checkNavigationState: ' + err);});
	}

	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		this.checking = true;

		try {
			// check navigation
			let app_nav_state = this.app.getNavigationState();
			let app_nav_target = app_nav_state.target;

			// check wallet is unlocked
			let unlocked = await this.app.checkWalletUnlocked()
			.catch(err => {
			});

			if (!unlocked) {
				if (!this.closing) {
					// check we are online
					let online = await this.app.checkOnline();

					if (!online) {
						let params = (app_nav_target ? app_nav_target.params : null);
						this.app.gotoRoute('about', params);
						//this.app.gotoRoute('offline', params);
						return;
					}

					// we open the default device wallet
					let devicewallet = await this.app.openDeviceWallet()
					.catch(err => {
					});
		
					walletuuid = devicewallet.uuid;
		
					this._setState({isdevicewallet: true});
				}
				else {
					let params = (app_nav_target ? app_nav_target.params : null);
					this.app.gotoRoute('login', params);
					return;
				}
			}
			else {
				let isdevicewallet = await this.app.isDeviceWallet(walletuuid);
	
				this._setState({isdevicewallet});
			}
	
		

			if (app_nav_target && (app_nav_target.route == 'currencycard') && (app_nav_target.reached == false)) {
				var params = app_nav_target.params;

				if (!params) {
					this.app.gotoRoute('home');
					return;
				}

				this.callparams = params;

				let web3_provider_url = (params.web3url ? this.app.decodebase64(params.web3url) : null);
				let tokenaddress = params.tokenaddress;;

				let currencyuuid = params.currencyuuid;

				let carduuid = params.carduuid;
				let cardaddress = params.cardaddress;

				let to_address = (params.to ? params.to : null);
				let transfer_amount = (params.amount ? params.amount : 0);

				let ring = (params.ring ? parseInt(params.ring) : 1);

				if ((ring > 1) && (this.state.isdevicewallet === true)) {
					// we need to be in a more secured ring
					let params = (app_nav_target ? app_nav_target.params : null);
					this.app.gotoRoute('login', params);
					return;
				}

				
				//
				// currency
				//
				let currency;
				
				if (currencyuuid) {
					currency = await mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);
				}
				else if (tokenaddress) {
					// probably called from external app via a url

					if (web3_provider_url) {
						let options = {}; // no other requirement on ethnodeserverconfig
						let scheme = await mvcmyquote.findLocalSchemeInfoFromWeb3Url(rootsessionuuid, web3_provider_url, options)
						.catch(err => {
							console.log('error in CurrencyCardView.checkNavigationState: ' + err);
						});

						if (scheme) {
							let _existing_currencies = await mvcmyquote.getAllCurrenciesWithAddress(rootsessionuuid, walletuuid, tokenaddress)
							.catch(err => {
								console.log('error in CurrencyCardView.checkNavigationState: ' + err);
							});
			
							if (_existing_currencies && (_existing_currencies.length > 0)) {
								if (_existing_currencies.length > 1) {
									currency = _existing_currencies[0]; // take first
									currencyuuid = currency.uuid;

									if (currency.scheme_uuid != scheme.uuid) {
										// look if we can find another currency on correct scheme
										for (var i = 0; i < _existing_currencies.length; i++) {
											if (_existing_currencies[i].scheme_uuid == scheme.uuid) {
												currency = _existing_currencies[i];
												currencyuuid = currency.uuid;
												break;
											}
										}
									}

								}
								else {
									currency = _existing_currencies[0]; // take first and only one
									currencyuuid = currency.uuid;
								}
							}
							else {
								// no registered currency corresponding to this token address

								// we add one
								currency = {};

								currency.uuid = this.app.guid();
								currency.scheme_uuid = scheme.uuid;
								currency.address = tokenaddress;
								currency.ops = {canpay: true};
								currency.description = 'currency for incoming payment request';
								currency.provider = 'provider.js';
								currency.xtra_data = {origin: 'incoming-payment-request'};

								await mvcmyquote.synchronizeCurrency(rootsessionuuid, walletuuid, currency)
								.catch(err => {
									console.log('could not import currency from token address: ' + err);
									currency = null;
								});

								if (currency) {
									currencyuuid = currency.uuid;

									// set description
									let _currency_description = currency.name + ' imported on ' + scheme.name;
									await mvcmyquote.setCurrencyDescription(rootsessionuuid, walletuuid, currencyuuid, _currency_description);
								}
							}
						}
						else {
							if (transfer_amount && to_address)
							this.app.alert('This rpc url is not registered. It is not possible to make payments to it: ' + web3_provider_url);
		
							this.app.gotoRoute('currencycards', params);
						}

					}
				}

				if (!currency) {
					this.app.gotoRoute('currencycards', params);
				}

				//
				// card
				//
				let card;
	
				if (carduuid && !cardaddress) {
					card = await mvcmyquote.getWalletCard(rootsessionuuid, walletuuid, carduuid).catch(err=>{});
				}
				else {
					let maincurrencycard = await mvcmyquote.getCurrencyCard(rootsessionuuid, walletuuid, currencyuuid).catch(err=>{});

					if (cardaddress) {
						card = await mvcmyquote.getCurrencyCardWithAddress(rootsessionuuid, walletuuid, currencyuuid, cardaddress);
	
						// check it can transfer the amount
						let canpay = (card && transfer_amount && to_address ? await mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, card.uuid, currencyuuid, transfer_amount) : true);
	
						if (!canpay)
						card = null;
					}
					
					if (!card) {
						// look if main card can handle
						card = maincurrencycard;
	
						let canpay = (card && transfer_amount && to_address ? await mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, card.uuid, currencyuuid, transfer_amount) : true);
	
						if (!canpay) {
							card = null;
						}
					}
	
					if (!card) {
						// let's go through all the currency cards for this tokenaddress and pick the first one that matches
						let cards = await mvcmyquote.getTokenCardList(rootsessionuuid, walletuuid, web3_provider_url, tokenaddress).catch(err => {});
	
						for (var i = 0; i < (cards ? cards.length : 0); i++) {
							let _card = cards[i];
							let _canpay = (transfer_amount && to_address ? await mvcmyquote.canPayAmount(rootsessionuuid, walletuuid, _card.uuid, currencyuuid, transfer_amount) : true);
	
							if (_canpay) {
								card = _card;
	
								// find the currency for this card, in case it is different
								let _currency = await mvcmyquote.findCardCurrency(rootsessionuuid, walletuuid, card.uuid).catch(err => {});
	
								if (_currency) {
									currency = _currency;
									currencyuuid = currency.uuid;
								}
								else {
									console.log('Warning: could not find currency for card: ' + card.uuid);
								}
								break;
							}
						}
					}
	
					if (!card) {
						// if not found a card yet, go back to main currency card, if it exists and even if it won't do
						card = maincurrencycard;
					}
				}


				if (!card) {
					if (transfer_amount && to_address)
					this.app.alert('Could not find a currency card capable of making corresponding payment. You should load credits/funds on an existing card or add a card with enough credits/funds.');

					if (!params.currencyuuid && currency)
					params.currencyuuid = currency.uuid;

					this.app.gotoRoute('currencycards', params);
				}

				// we have currency and card now (hope they match)
				this.card = card;
				this.currency = currency;

				// mark target as reached
				app_nav_target.reached = true;
			}
			else {
				this.app.gotoRoute('home');
				return;
			}

			// fill info for current card
			if ((this.card) && (this.currency)) {
				let card = this.card;
				let currency = this.currency;

				let carduuid = card.uuid;
				let currencyuuid = currency.uuid;

				let scheme = await mvcmyquote.getSchemeInfo(rootsessionuuid, card.schemeuuid );

				const credits = await mvcmyquote.getCreditBalance(rootsessionuuid, walletuuid, carduuid);
				const creditbalance = credits.transactionunits;
				credits.threshold = await mvcmyquote.getSchemeTransactionUnitsThreshold(rootsessionuuid, scheme.uuid);

				const position = await mvcmyquote.getCurrencyPosition(rootsessionuuid, walletuuid, currencyuuid, carduuid);
				const position_string = await mvcmyquote.formatCurrencyAmount(rootsessionuuid, currencyuuid, position);
				const position_int = await position.toInteger();
		
				
				// message translated in user's language
				let message_text = '';
				
				// export
				let address = card.address;
				let privatekey = await mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, carduuid).catch(err => {});
				let web3providerurl = scheme.network.ethnodeserver.web3_provider_url;

				let address_string = (address ? mvcmyquote.fitString(address, 32) : '');
				let privatekey_string = (privatekey ? mvcmyquote.fitString(privatekey, 32) : '');
				let web3providerurl_string = (web3providerurl ? mvcmyquote.fitString(web3providerurl, 48) : '');

				if (privatekey) {
					message_text = mvcmyquote.t(
						'If you generated this card instead of importing it thanks to an external private key \
						it is strongly recommended to copy the private key thanks to the icon next to the \
						corresponding box and save it in a safe  place to be able to re-create the card. If you \
						don\'t, you might loose all the funds that are allocated to this card.');
				}
				else {
					message_text = mvcmyquote.t(
						'This card has been imported through its address and no private key is currently stored.\
						Accordingly, this card is read-only and you can not do any transaction through the interface.');
				}

				let need_credit_units = this.state.need_credit_units;
				let credit_units_requested = this.state.credit_units_requested;
				
				if (credits.transactionunits < credits.threshold) {
					need_credit_units = true;
					credit_units_requested = (credits.threshold - credits.transactionunits) + 1;
				}

				// buying
				let priceinfo = '';
				let can_buy_credit_units = false;

				if (need_credit_units) {
					// fill other cards on same currency
					this.currencycards = await this._readCurrencyCards();
					this.positivecards = await this._filterCreditPositiveCards();
				}

				if (creditbalance > 0) {
					let tx_fee = {};
					tx_fee.transferred_credit_units = 0;
					let transfer_cost_units = (currency.uniswap_v2 && currency.uniswap_v2.swap_max_cost_units ? parseInt(currency.uniswap_v2.swap_max_cost_units) : 8); 
					// max of successive transactions (approve, buy)
					tx_fee.estimated_cost_units = transfer_cost_units;

					let feelevel = await mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, carduuid, tx_fee);
		
					can_buy_credit_units = await mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, carduuid, tx_fee, feelevel).catch(err => {});
				}
				else {
					can_buy_credit_units = false;
				}

				if (can_buy_credit_units) {
					if ((currency.ops.cantxfree !== true) && (currency.ops.cantopup !== true) && (currency.ops.canswap === true)) {
						// check price to buy credit units
						let price_struct = await mvcmyquote.getPriceForCreditUnits(rootsessionuuid, currencyuuid, this._getCreditsUnitsToBuy(credit_units_requested));
						
						price_struct.credit_units_requested = this._getCreditsUnitsRequested(credit_units_requested);

						
						priceinfo = await this._getPriceInfo(price_struct);
					}
				}

				// transfer
				let to_address = (this.callparams && this.callparams.to ? this.callparams.to : null);
				let amount = (this.callparams && this.callparams.amount ? this.callparams.amount : 0);
				let decimalamount_string;

				if (amount > 0) {
					let decimals = parseInt(currency.decimals);

					let decimalamount = await mvcmyquote.getDecimalAmount(rootsessionuuid, amount, decimals);
					decimalamount_string = await decimalamount.toFixedString();
				}

				// return url
				let return_url = (this.callparams && this.callparams.returnurl ? this.app.decodebase64(this.callparams.returnurl) : null);
				let callback_url = (this.callparams && this.callparams.callbackurl ? this.app.decodebase64(this.callparams.callbackurl) : null);

				this._setState({message_text, currency,
					currentcard: card, 
					creditbalance, position, position_int, position_string,  
					address, privatekey, web3providerurl,
					address_string, privatekey_string, web3providerurl_string,
					need_credit_units, can_buy_credit_units, credit_units_requested, priceinfo,
					to_address, transfer_amount: decimalamount_string,
					return_url, callback_url});


			}

		}
		catch(e) {
			console.log('exception in CurrencyCardView.checkNavigationState: '+ e);
		}
		finally {
			this.checking = false;
		}
		

	}

	async onRefreshPage() {
		console.log('CurrencyCardView.onRefreshPage called');

		if (this.checking !== true)
		this.checkNavigationState().catch(err => {console.log('error in checkNavigationState: ' + err);});
	}

	async onMainCardSwitch() {
		console.log('CurrencyCardView.onMainCardSwitch called');
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		// set current card as main card for its currency
		let { currency, currentcard } = this.state;

		if (!currency || !currentcard)
			return;

		await mvcmyquote.setCurrencyCard(rootsessionuuid, walletuuid, currency.uuid, currentcard.uuid)
		
		let maincardswitchedat = Date.now();

		
		this._setState({maincardswitchedat});
	}

	async onLoadCard() {
		console.log('CurrencyCardView.onLoadCard called');
		 this.app.alert('Load card pressed')
	}


	async onBack() {
		console.log('onBack pressed!');

		let currencyuuid = this.currency.uuid;
		
		let params = {action: 'view', currencyuuid};
	
		await this.app.gotoRoute('currencycards', params);
	}

	
	// end of life
	componentWillUnmount() {
		console.log('CurrencyCardView.componentWillUnmount called');
		this.closing = true;

		let app = this.app;
		let mvcmyquote = this.getMvcMyQuoteObject();
		
		mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
		
		this.app.closeDeviceWallet();
	}
	
	// user actions
	async onTransfer() {
		console.log('onTransfer pressed!');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let {currentcard, currency, transfer_amount, to_address, return_url, callback_url} = this.state;

		this.setState({processing: true});

		try {
			// check address
			let validaddress = await mvcmyquote.isValidAddress(rootsessionuuid, to_address)
			.catch(err => {
				console.log('error in CurrencyCardView.onTransfer: ' + err);
			});

			if (!validaddress) {
				this.app.alert('This address is not valid');
				this._setState({processing: false});
				return;
			}

			let tokenamount = await mvcmyquote.getCurrencyAmount(rootsessionuuid, currency.uuid, transfer_amount);
			let tokenamount_int = await tokenamount.toInteger();

			// check we have enough transaction credits
			let tx_fee = {};
			tx_fee.transferred_credit_units = 0;
			let transfer_cost_units = 3;
			tx_fee.estimated_cost_units = transfer_cost_units;

			let _feelevel = await mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee);


			var canspend = await mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee, _feelevel).catch(err => {});

			if (!canspend) {
				if (tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits) {
					this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
				else {
					this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
			}
						
	
	
			// perform payment
			let txhash_payment = await mvcmyquote.payAmount(rootsessionuuid, walletuuid, currentcard.uuid, to_address, currency.uuid, tokenamount_int, _feelevel)
			.catch(err => {
				console.log('error in CurrencyCardView.onTransfer: ' + err);
			});
	
			if (!txhash_payment) {
				this.app.alert('Could not transfer amount');
				this.setState({processing: false});
				return;
			}

			//
			// post transaction processing
			//
			let turn_off_processing = true;

			// send info to caller's backoffice
			if (callback_url) {
				try {
					// transaction hash
					let _url = callback_url;

					if (_url.includes('?') !== true) {
						_url += '?tx=' + txhash_payment;;
					}
					else {
						// transaction hash
						_url += '&tx=' + txhash_payment;
					}

					await new Promise((resolve, reject) => {

						// make an XHttpRequest call (simle call, no check on return)
						var xhttp = new XMLHttpRequest();
					
						xhttp.open('GET', _url, true);
						
						xhttp.send();
						xhttp.onload = function(e) {
							if (xhttp.status == 200) {
								var res = {};
								
								try {
									res = JSON.parse(xhttp.responseText);
								}
								catch(e) {
								}
			
								resolve(res);
							}
							else {
								reject('wrong result');
							}
						};
						
						xhttp.onerror = function (e) {
							reject('rest error is ' + xhttp.statusText);
						};
					})
					.catch(err => {
						console.log('error in CurrencyCardView.onTransfer notifying callback: ' + err);
					});

				}
				catch(e) {
					console.log('exception in CurrencyCardView.onTransfer notifying callback: ' + e);
				}
			}


			// return to caller
			if (return_url) {
				// transaction hash
				let _url = return_url;

				if (_url.includes('?') !== true) {
					_url += '?tx=' + txhash_payment;;
				}
				else {
					// transaction hash
					_url += '&tx=' + txhash_payment;
				}

				// and we add all call parameters ending with "id"
				if (this.callparams) {
					var _keys = Object.keys(this.callparams);
					for (var i = 0; i < _keys.length; i++) {
						if (_keys[i].toLowerCase().endsWith("id")) {
							_url += '&' + _keys[i] + '=' + this.callparams[_keys[i]];
						}
					}
				}

				await this.app.gotoUrl(_url);
				turn_off_processing = false; // wait for url jump to happen
			}
			else {
				await this.app.refreshPage();	
			}

			// end of processing
			if (turn_off_processing)
			this.setState({processing: false});

		
			return true;
		}
		catch(e) {
			console.log('exception in onTransfer: ' + e);
			this.setState({processing: false});
		}
	}

	async onReturn() {
		console.log('onReturn pressed!');

		const {return_url} = this.state;

		if (!return_url)
		return;

		await this.app.gotoUrl(return_url);
	}

	// buying
	async onBuyCredits() {
		console.log('onBuyCredits pressed!');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let {currentcard, currency, credit_units_requested} = this.state;

		this.setState({processing: true});

		try {
			let credit_units_tobuy = this._getCreditsUnitsToBuy(credit_units_requested);
		
			let tx_fee = {};
			tx_fee.transferred_credit_units = 0;
			let transfer_cost_units = (currency.uniswap_v2 && currency.uniswap_v2.swap_max_cost_units ? parseInt(currency.uniswap_v2.swap_max_cost_units) : 8); 
			// max of successive transactions (approve, buy)
			tx_fee.estimated_cost_units = transfer_cost_units;

			let feelevel = await mvcmyquote.getRecommendedFeeLevel(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee);


			var txhash = await mvcmyquote.buyCreditUnits(rootsessionuuid, walletuuid, currentcard.uuid, currency.uuid, credit_units_tobuy, feelevel)
			.catch(err => {
				console.log('error in CurrencyCardView.onBuyCredits: ' + err);
			});
	
			if (!txhash) {
				this.app.alert('Could not buy credit units');
				this.setState({processing: false});
				return;
			}

			this.setState({processing: false});

			this.app.refreshPage();	
		
			return true;
		}
		catch(e) {
			console.log('exception in onBuyCredits: ' + e);
			this.setState({processing: false});
		}
	
	}

	// picking from
	async onSelectSourceCard(uuid) {
		var cards = this.currencycards;
		let sourcecard;

		for (var i = 0; i < cards.length; i++) {
			if (uuid === cards[i].uuid) {
				sourcecard = cards[i];
				break;
			}
		}

		if (sourcecard) {
			this._setState({sourcecard});
		}

		return true;
	}

	async onPickCreditsFrom() {
		console.log('onPickCreditsFrom pressed!');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;
		
		let { sourcecard, currentcard, credit_units_requested  } = this.state;

		this.setState({processing: true});

		try {
			// check we have enough transaction credits
			let feelevel = null;
			let tx_fee = {};
			tx_fee.transferred_credit_units = parseInt(credit_units_requested);
			let transfer_cost_units = 1;
			tx_fee.estimated_cost_units = transfer_cost_units;

			var canspend = await mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, sourcecard.uuid, tx_fee, feelevel).catch(err => {});

			if (!canspend) {
				if (tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits) {
					this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
				else {
					this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
			}

			// do transfer of credits
			let units_txhash = await mvcmyquote.transferTransactionUnits(rootsessionuuid, walletuuid, sourcecard.uuid, currentcard.uuid, credit_units_requested);

			if (!units_txhash) {
				this.app.alert('Could not pick transaction units from source card');
				this.setState({processing: false});
				return;
			}

			this.setState({processing: false});

			this.app.refreshPage();	
	
			return true;
		}
		catch(e) {
			console.log('exception in onPickCreditsFrom: ' + e);
			this.app.error('exception in onPickCreditsFrom: ' + e);

			this.app.alert('could not pick transaction units')

			this.setState({processing: false});
		}
	}

	// moving credits
	async onMoveCredits() {
		console.log('onMoveCredits pressed!');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let {currentcard, credit_amount, to_address, return_url} = this.state;

		this.setState({processing: true});

		try {
			// check address
			let validaddress = await mvcmyquote.isValidAddress(rootsessionuuid, to_address)
			.catch(err => {
				console.log('error in CurrencyCardView.onTransfer: ' + err);
			});

			if (!validaddress) {
				this.app.alert('This address is not valid');
				this._setState({processing: false});
				return;
			}

			// check we have enough transaction credits
			let feelevel = null;
			let tx_fee = {};
			tx_fee.transferred_credit_units = parseInt(credit_amount);
			let transfer_cost_units = 1;
			tx_fee.estimated_cost_units = transfer_cost_units;

			var canspend = await mvcmyquote.canCompleteTransaction(rootsessionuuid, walletuuid, currentcard.uuid, tx_fee, feelevel).catch(err => {});

			if (!canspend) {
				if (tx_fee.estimated_fee.execution_credits > tx_fee.estimated_fee.max_credits) {
					this.app.alert('The execution of this transaction is too large: ' + tx_fee.estimated_fee.execution_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
				else {
					this.app.alert('You must add transaction units to the source card. You need at least ' + tx_fee.required_units + ' credit units.');
					this._setState({processing: false});
					return;
				}
			}
			

			// get card on same scheme for the to_address
			var tocard = await mvcmyquote.getCardInfoFromAddressOnScheme(rootsessionuuid, walletuuid, currentcard.schemeuuid, to_address).catch(err => {});


			let units_txhash;
			
			if (tocard) {
				units_txhash = await mvcmyquote.transferTransactionUnits(rootsessionuuid, walletuuid, currentcard.uuid, tocard.uuid, credit_amount);
			}
			else {
				// it is not one of our cards, or a read-only card that we know
				units_txhash = await mvcmyquote.sendTransactionUnits(rootsessionuuid, walletuuid, currentcard.uuid, to_address, credit_amount);
			}

			if (!units_txhash) {
				this.app.alert('Could not pick transaction units from source card');
				this.setState({processing: false});
				return;
			}
				
			
			this.setState({processing: false});

			if (return_url) {
				// transaction hash
				let _url = return_url;

				if (_url.includes('?') !== true) {
					_url += '?tx=' + units_txhash;;
				}
				else {
					// transaction hash
					_url += '&tx=' + units_txhash;
				}

				// and we add all call parameters ending with "id"
				if (this.callparams) {
					var _keys = Object.keys(this.callparams);
					for (var i = 0; i < _keys.length; i++) {
						if (_keys[i].toLowerCase().endsWith("id")) {
							_url += '&' + _keys[i] + '=' + this.callparams[_keys[i]];
						}
					}
				}

				await this.app.gotoUrl(_url);
			}
			else {
				await this.app.refreshPage();	
			}

			return true;
		}
		catch(e) {
			console.log('exception in onMoveCredits: ' + e);
			this.setState({processing: false});
		}
	}

	
	// rendering
	renderBuyMoreCreditsPart() {
		let { currency, credit_units_requested, position_int,priceinfo } = this.state;

		if (currency.ops.canswap  !== true)
		return (<></>);

		let credit_units_requested_disabled = ((credit_units_requested > 0) || (parseInt(credit_units_requested) > 0) ? false : true);

		if (position_int == 0)
			credit_units_requested_disabled = true;

		return (
			<div>
			<div className="Separator">&nbsp;</div>
			<FormGroup controlId="buycredits">
				<FormLabel>Buy more credit units</FormLabel>
				{(priceinfo && priceinfo.length ? <div className="TextBox">{priceinfo}</div> : <></>)}
				<FormGroup className="ClaimerCardLine">
					<FormControl
						autoFocus
						type="text"
						value={credit_units_requested}
						onChange={e => this.setState({credit_units_requested: e.target.value})}
					/>
					<Button 
					disabled={credit_units_requested_disabled}
					onClick={this.onBuyCredits.bind(this)} 
					type="submit">
					Buy
					</Button>

				</FormGroup>
			</FormGroup>
			</div>
		);
		
	}

	renderPickCreditsFromPart() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let { sourcecard, credit_units_requested } = this.state;
		let positivecards = this.positivecards;

		let can_pick_credit_units = false;
		let pick_credit_units_disabled = true;

		if ((!positivecards) || (positivecards.length == 0)) {
			can_pick_credit_units = true;
		}

		if (sourcecard) {
			if ((credit_units_requested > 0) || (parseInt(credit_units_requested) > 0)) {

				if (credit_units_requested < sourcecard.credits.transactionunits) {
					pick_credit_units_disabled = false;
				}
				else {
					pick_credit_units_disabled = true;
				}
			}
			else {
				pick_credit_units_disabled = true;
			}

		}
		else {
			pick_credit_units_disabled = true;
		}

		return (
				<div>
				<div className="Separator">&nbsp;</div>

				{(can_pick_credit_units ? 
				<div className="TextBox">There is no other card for this currency that has enough transaction credits to pick some units from it.</div> :
				<FormGroup controlId="pickcredits">
					<FormLabel>Pick from</FormLabel>
					<FormGroup controlId="newcard" className="AddCardLine">
						<FormControl className="CardPrivateKeyInput"
							disabled
							autoFocus
							type="text"
							value={(sourcecard ? sourcecard.address : '')}
							onChange={e => this._setState({signingkey: e.target.value})}
						/>
						<DropdownButton
							id="input-dropdown-addon"
							title="Cur."
							onSelect={e => this.onSelectSourceCard(e)}
						>
							{positivecards.map((item, index) => (
								<Dropdown.Item key={item.uuid} eventKey={item.uuid} value={item.uuid}>{'card with ' + item.credits.transactionunits + ' units - ' + mvcmyquote.fitString(item.address, 12)}</Dropdown.Item>
							))}
						</DropdownButton>
					</FormGroup>
				</FormGroup>
				)}

				<FormGroup controlId="pickcredits">
					<FormLabel># credit units</FormLabel>
					<FormGroup className="ClaimerCardLine">
						<FormControl
							autoFocus
							type="text"
							value={credit_units_requested}
							onChange={e => this.setState({credit_units_requested: e.target.value})}
						/>
						<Button 
						disabled={pick_credit_units_disabled}
						onClick={this.onPickCreditsFrom.bind(this)} 
						type="submit">
						Pick
						</Button>
	
					</FormGroup>
				</FormGroup>
				</div>
			);
	

	}

	renderTransferToPart() {
		let { to_address, transfer_amount, return_url } = this.state;

		let transfer_disabled = (to_address && to_address.length && ((transfer_amount > 0) || (parseInt(transfer_amount) > 0) ) ? false : true);

		return (
			<div>
			<div className="Separator">&nbsp;</div>
			<FormGroup controlId="transferto">
				<FormLabel>Transfer to address</FormLabel>
				<FormGroup className="ClaimerCardLine">
					<FormControl
						autoFocus
						type="text"
						value={(to_address ? to_address : '')}
						onChange={e => this.setState({to_address: e.target.value})}
					/>
					{(return_url ? 
					<Button 
					onClick={this.onReturn.bind(this)} 
					type="submit">
					Cancel
					</Button> :
					<></>)}
				</FormGroup>
			</FormGroup>
			<FormGroup controlId="transfer">
				<FormLabel>currency amount</FormLabel>
				<FormGroup className="ClaimerCardLine">
					<FormControl
						autoFocus
						type="text"
						value={transfer_amount}
						onChange={e => this.setState({transfer_amount: e.target.value})}
					/>
					<Button 
					disabled={transfer_disabled}
					onClick={this.onTransfer.bind(this)} 
					type="submit">
					Transfer
					</Button>

				</FormGroup>
			</FormGroup>
			</div>		
		);
	}

	renderMoveCreditsToPart() {
		let { to_address, credit_amount } = this.state;

		let transfer_disabled = (to_address && to_address.length && ((credit_amount > 0) || (parseInt(credit_amount) > 0) ) ? false : true);

		return (
			<div>
			<div className="Separator">&nbsp;</div>
			<FormGroup controlId="move">
				<FormLabel># credits units</FormLabel>
				<FormGroup className="ClaimerCardLine">
					<FormControl
						autoFocus
						type="text"
						value={credit_amount}
						onChange={e => this.setState({credit_amount: e.target.value})}
					/>
					<Button 
					disabled={transfer_disabled}
					onClick={this.onMoveCredits.bind(this)} 
					type="submit">
					Provide
					</Button>

				</FormGroup>
			</FormGroup>
			</div>		
		);
	}

	renderTransactionPart() {
		let { to_address, currency, need_credit_units, can_buy_credit_units } = this.state;

		if (currency.ops.canpay !== true)
			return (<></>);

		if (need_credit_units) {
			return (
				<div className="Form">
					{this.renderPickCreditsFromPart()}
					{(can_buy_credit_units ? this.renderBuyMoreCreditsPart() : <></>)}
				</div>
			);
		}
		else {

			return (
				<div className="Form">

					{this.renderTransferToPart()}

					{(to_address && to_address.length ?
					this.renderMoveCreditsToPart() :
					this.renderBuyMoreCreditsPart())}

				</div>
			);
		}

	}

	renderCurrencyCardView() {
		let { currency, currentcard,
			creditbalance, position_string,
			privatekey, address, web3providerurl,
			privatekey_string, address_string, web3providerurl_string } = this.state;
			
		let maincard = (currentcard && currentcard.xtra_data.myquote ? currentcard.xtra_data.myquote.maincard : false);

		
		return (
			<div className="Form">
				<FormGroup className="CurrencyCard" controlId="balance">
				<span>
					<FormLabel># credit units</FormLabel>
					<FormControl
						className="CurrencyCardBalance"
						disabled
						autoFocus
						type="text"
						value={creditbalance}
					/>
				</span>
				<span>
					<FormLabel>Balance</FormLabel>
					<FormControl
						className="CurrencyCardBalance"
						disabled
						autoFocus
						type="text"
						value={position_string}
					/>
				</span>
				<span className="CurrencyCardIconCol">
				<span>
				{(maincard ? 
				<FontAwesomeIcon icon={faStarSolid} size="2x" /> :
				<FontAwesomeIcon icon={faStarEmpty} size="2x" onClick={this.onMainCardSwitch.bind(this)} />)}
				</span>
{/* 				<span>
				<FontAwesomeIcon icon={faUpload} size="2x" onClick={this.onLoadCard.bind(this)} />
				</span>
 */}				</span>

				</FormGroup>

				<FormGroup controlId="address">
					<FormLabel>Address</FormLabel>
					<FormGroup className="ClaimerCardLine">
						<FormControl
							className="CurrencyCardAddress"
							disabled
							autoFocus
							type="text"
							value={(address_string ? address_string : '')}
						/>
						<div className="ShareIcon">
							<TextCopyIcon
								app={this.app}
								text={address}
								message="address has been copied to clipboard"
							/>
						</div>
					</FormGroup>
				</FormGroup>

				{(privatekey ? 
				<FormGroup controlId="privatekey">
					<FormLabel>Private key</FormLabel>
					<FormGroup className="ClaimerCardLine">
						<FormControl
							className="CurrencyCardAddress"
							disabled
							autoFocus
							type="text"
							value={(privatekey_string ? privatekey_string : '')}
						/>
						<div className="ShareIcon">
							<TextCopyIcon
								app={this.app}
								text={privatekey}
								message="private key has been copied to clipboard"
							/>
						</div>
					</FormGroup>
				</FormGroup> :
				<></>
				)}

				<FormGroup controlId="web3providerurl">
					<FormLabel>RPC URL {(currency && currency.name ? 'for ' + currency.name : '')}</FormLabel>
					<FormGroup className="ClaimerCardLine">
						<FormControl
							className="CurrencyCardAddress"
							disabled
							autoFocus
							type="text"
							value={(web3providerurl_string ? web3providerurl_string : '')}
						/>
						<div className="ShareIcon">
							<TextCopyIcon
								app={this.app}
								text={web3providerurl}
								message="rpc url has been copied to clipboard"
							/>
						</div>
					</FormGroup>
				</FormGroup>

			</div>
		  );
	}

	render() {
		let {processing} = this.state; 

		if (processing === true) {
			return (
				<div className="Splash">
					<div>{this.state.processinginfo}</div>
					<Dots />
				</div>
			);
		}

		let { message_text, privatekey } = this.state;

		return (
			<div className="Container">
				<div className="TitleBanner">
				<div className="Title">Currency Card</div>
				<div className="BackIcon" onClick={this.onBack.bind(this)}><FontAwesomeIcon icon={faUndo} /></div>
				</div>

				{ this.renderCurrencyCardView()}
				
				<div className="TextBox">
				  {message_text}
			  	</div>

				{(privatekey ? 
				 this.renderTransactionPart():
				 <></>)}

			</div>
		  );
	}
	
}


// propTypes validation
CurrencyCardView.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	currentwalletuuid: PropTypes.string,
	iswalletlocked: PropTypes.bool,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		pending: state.login.pending,
		success: state.login.success,
		lasterror: state.login.error,
		currentwalletuuid: state.wallets.walletuuid,
		iswalletlocked: state.wallets.islocked,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {CurrencyCardView};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCardView);

