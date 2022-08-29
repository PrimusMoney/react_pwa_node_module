import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown, DropdownButton, FormGroup, FormControl, FormLabel, InputGroup, Table } from 'react-bootstrap';


import PropTypes from 'prop-types';

import { faKey, faGlasses, faStar, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class CurrencyCardListView extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;

		this.uuid = this.app.guid();

		this.closing = false;

		this.cards = [];
		
		this.state = {
			currencies: [],
			items: [],
			currency: null,
			signingkey: null,
			isaprivatekey: false,
		}
	}

	_setState(state) {
		if (this.closing !== true)
		this.setState(state);
	}

	
	// post render commit phase
	componentDidUpdate(prevProps, prevState) {
		console.log('CurrencyCardListView.componentDidUpdate called');
		
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;
		
		// entered a private key
		if (this.state.signingkey != prevState.signingkey) {
			mvcmyquote.isValidPrivateKey(rootsessionuuid, this.state.signingkey)				
			.then((isaprivatekey) => {
				this._setState({isaprivatekey});
			})
			.catch(err => {
			});

		}
	}
	
	componentDidMount() {
		console.log('CurrencyCardListView.componentDidMount called');

		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		
		mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));

		this.checkNavigationState().catch(err => {console.log('error in CurrencyCardListView.checkNavigationState: ' + err);});
	}

	async _readCards() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let currencies = await this._readVisibleCurrencies();

		if (!currencies)
			return Promise.reject('could not get list of currencies');

		var cards = [];

		for (var i = 0; i < currencies.length; i++) {
			let currency = currencies[i];

			let _currencycards = await mvcmyquote.getCurrencyCardList(rootsessionuuid, walletuuid, currency.uuid)
			.catch(err => {
				console.log('error in CurrencyCardListView._readCards: ' + err);
			});

			if (!_currencycards) continue;

			// enrich items
			for (var j = 0; j < _currencycards.length; j++) {
		
				_currencycards[j].currency = currency;
				_currencycards[j].currencyuuid = currency.uuid;

				// composite key for list
				_currencycards[j].comp_key = _currencycards[j].uuid + '|' + _currencycards[j].currencyuuid

				var _privkey = await mvcmyquote.getCardPrivateKey(rootsessionuuid, walletuuid, _currencycards[j].uuid).catch(err => {});
				_currencycards[j].cansign = (_privkey ? true : false);

				let pos = await mvcmyquote.getCurrencyPosition(rootsessionuuid, walletuuid, currency.uuid, _currencycards[j].uuid);
			
				if (pos !== undefined) {
					_currencycards[j].balance_int = await pos.toInteger();
					_currencycards[j].balance_string = await mvcmyquote.formatCurrencyAmount(rootsessionuuid, currency.uuid, pos);
				}
			}

			// merge
			cards = cards.concat(_currencycards);

			if (!this.state.currency) {
				// if we are currently loading all the cards
				// update displayed list to get a progressive display
				this._setState({items: cards});
			}
		}

		return cards;		
	}

	async _filterCards(currency) {
		let items = [];
		let cards = this.cards;

		if (currency) {
			// filter items
			for (var i = 0; i < cards.length; i++) {
				if (currency.uuid === cards[i].currencyuuid) {
					items.push(cards[i]);
				}
			}
		}
		else {
			items = cards;
		}

		return items;
	}

	async _selectCurrency(currencyuuid) {
		let {currencies} = this.state;
		let currency;

		for (var i = 0; i < currencies.length; i++) {
			if (currencyuuid === currencies[i].uuid) {
				currency = currencies[i];
				break;
			}
		}

		if (currency) {
			// filter items
			var items = await this._filterCards(currency);

			this._setState({currency, items});
		}
	}

	async _readVisibleCurrencies() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		let currencies = await mvcmyquote.getCurrencies(rootsessionuuid, walletuuid);

		if (!currencies)
		return Promise.reject('could not get list of currencies');

		let arr = [];

		for (var i = 0; i < currencies.length; i++) {
			if (currencies[i].hidden && (currencies[i].hidden == true))
			continue;

			arr.push(currencies[i]);
		}

		return arr;
	}

	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		let walletuuid = this.props.currentwalletuuid;

		try {
			// check if navigation asks for a specific currency
			let app_nav_state = this.app.getNavigationState();
			let app_nav_target = app_nav_state.target;

			// check wallet is unlocked
			let unlocked = await this.app.checkWalletUnlocked()
			.catch(err => {
			});
	
			if (!unlocked) {
				if (!this.closing) {
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

			if (app_nav_target && (app_nav_target.route == 'currencycards') && (app_nav_target.reached == false)) {
				var params = app_nav_target.params;

				let currencyuuid = params.currencyuuid;


				if (currencyuuid) {
					let currency = await mvcmyquote.getCurrencyFromUUID(rootsessionuuid, currencyuuid);
					
					this._setState({currency});
				}

				// mark target as reached
				app_nav_target.reached = true;
			}
			
			

			// read all currencies
			let currencies = await this._readVisibleCurrencies();

			if (!currencies)
				return Promise.reject('could not get list of currencies');


			// read list of cards for all currencies
			this.cards = await this._readCards();
			let items = this.cards;

			this._setState({currencies, items});

			if (this.state.currency) {
				let items = await this._filterCards(this.state.currency);

				this._setState({items});
			}
		}
		catch(e) {
			console.log('exception in CurrencyCardListView.checkNavigationState: '+ e);
		}


	}
	
	async onRefreshPage() {
		console.log('CurrencyCardListView.onRefreshPage called');

		this.checkNavigationState().catch(err => {console.log('error in checkNavigationState: ' + err);});
	}
	
	// end of life
	componentWillUnmount() {
		console.log('CurrencyCardListView.componentWillUnmount called');
		this.closing = true;

		let app = this.app;
		let mvcmyquote = this.getMvcMyQuoteObject();
		
		mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
		
		this.app.closeDeviceWallet();
	}

	
	// user actions
	async onGenerateCard() {
		console.log('onGenerateCard pressed!');

		if (this.state.currentcard)
			return;

		let mvcmyquote = this.getMvcMyQuoteObject();
		let rootsessionuuid = this.props.rootsessionuuid;

		let privatekey = await mvcmyquote.generatePrivateKey(rootsessionuuid);

		this._setState({signingkey: privatekey});
	}

	async onAddCard() {
		console.log('onAddCard pressed!');
		
		let {currency, signingkey} = this.state;

		if ( (currency) && (currency.uuid)) {
			let currencyuuid = currency.uuid;
			let options = {allow_readonly: false};

			let card = await this.app.createCurrencyCard(currencyuuid, signingkey, options)			
			.catch(err => {
				this.app.alert('Could not created currency card')
			});

			if (card) {
				this.app.refreshPage();
			}
		}
	}

	async onSelectCurrency(uuid) {
		return this._selectCurrency(uuid);
	}

	async onClickItem(item) {
		let currencyuuid = item.currencyuuid;
		let carduuid = item.uuid;
		let cardaddress = item.address;

		let params = {currencyuuid, carduuid, cardaddress};

		this.app.gotoRoute('currencycard', params);
	}

	renderCurrencyForm() {
		let {currency, currencies, signingkey, isaprivatekey} = this.state;

		return (	
			<div className="Form">
				<FormGroup controlId="currency">
					<FormLabel>Currency</FormLabel>
					<FormGroup controlId="pickccy" className="PickCurrencyLine">
					<InputGroup>
						<FormControl className="CurrencyName"
							disabled
							autoFocus
							type="text"
							value={(currency ? (currency.description ? currency.description : currency.name) : '')}
						/>
						<DropdownButton
							id="input-dropdown-addon"
							title="Cur."
							onSelect={e => this.onSelectCurrency(e)}
						>
							{currencies.map((item, index) => (
								<Dropdown.Item key={item.uuid} eventKey={item.uuid} value={item.uuid}>{item.symbol}</Dropdown.Item>
							))}
						</DropdownButton>
					</InputGroup>
					</FormGroup>
				</FormGroup>

				{(currency ?
				<FormGroup controlId="newcurrencycard">
					<FormLabel>Private Key&nbsp;{(currency && currency.name ? 'for ' + (currency.description ? currency.description : currency.name) : '')}</FormLabel>
					<FormGroup controlId="newcard" className="AddCardLine">
						<FormControl className="CardPrivateKeyInput"
							autoFocus
							type="text"
							value={(signingkey ? signingkey : '')}
							onChange={e => this._setState({signingkey: e.target.value})}
						/>
						<div className="GenerateCardIcon">
						<FontAwesomeIcon 
							icon={faUserLock}
							size="3x"
							onClick={this.onGenerateCard.bind(this)}
						/>
						</div>
						<div className="AddCardButton">
							<Button 
							disabled={(isaprivatekey ? false : true)}
							onClick={this.onAddCard.bind(this)} 
							type="submit">
							Add
						</Button>
						</div>
					</FormGroup>
				</FormGroup> :
				<></>)}

			</div>
		);
	}

	renderItem(item){
		let mvcmyquote = this.app.getMvcMyQuoteObject();

		let uuid = item.uuid;
		let comp_key = item.comp_key;

		let address = mvcmyquote.fitString(item.address, 21);
		let currencysymbol = item.currency.symbol;
		let cansign = item.cansign;
		let maincard = (item.xtra_data.myquote ? item.xtra_data.myquote.maincard : false);
		let balance_string = item.balance_string;

		return (
			<tr key={comp_key} onClick={() => this.onClickItem(item)}>
				<th>{address}</th>
				<th>
					<span className="CurrencyCardIcons">
					{(cansign ? <FontAwesomeIcon icon={faKey} /> : <FontAwesomeIcon icon={faGlasses} />)}
					{(maincard ? <FontAwesomeIcon icon={faStar} /> : <></>)}
					</span>
				</th>
				<th>{balance_string}</th>
			</tr>
		);
	}
	
	renderList() {
		let {items} = this.state;

		return (
			<Table responsive>
				<thead className="ListHeader">
					<tr>
					<th>Address</th>
					<th>Type</th>
					<th>Balance</th>
					</tr>
				</thead>
				<tbody className="ListItem" >
				{items.map((item, index) => {
					return (this.renderItem(item));
				})}
				</tbody>
			</Table>
		);	
	}
	
	
	// rendering
	render() {
		let {items} = this.state;
		
		return (
			<div className="Container">
				<div className="Title">List of currency cards</div>
				{this.renderCurrencyForm()}
				{this.renderList()}
			</div>
		);
	}
	
}


// propTypes validation
CurrencyCardListView.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		pending: state.login.pending,
		success: state.login.success,
		lasterror: state.login.error,
		currentwalletuuid: state.wallets.walletuuid,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {CurrencyCardListView};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyCardListView);

