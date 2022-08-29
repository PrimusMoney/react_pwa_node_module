import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Header from '../../../navigation/header/header.js';

import CurrencyCardListView from '../../../components/common/currency/currency-card-list-view.js';

class CurrencyCardListScreen extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;
		
		this.uuid = this.app.guid();
		
		
		this.state = {
			action: 'create',
			loaded: false,
			currencyinfo: 'loading...'
		};
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('CurrencyCardListScreen.componentDidMount called');
		
		this.checkNavigationState().catch(err => {console.log('error in checkNavigationState: ' + err);});
	}

	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

		let app_nav_state = this.app.getNavigationState();
		let app_nav_target = app_nav_state.target;

		if (app_nav_target && (app_nav_target.route == 'currencycards') && (app_nav_target.reached == false)) {
			var params = app_nav_target.params;

			if (params) {
				let currencyuuid = params.currencyuuid;
				let currencyinfo = '';
				let action = (params.action ? params.action : 'view');
	
				if (currencyuuid) {
					// retrieve info from firenze
					currencyinfo = currencyuuid;
				}
	
				this.setState({action, currencyuuid, currencyinfo});
			}

			// CurrencyCardListView will take care of marking target reached
		}

		this.setState({loaded: true});
	}
	
	// end of life
	componentWillUnmount() {
		console.log('CurrencyCardListScreen.componentWillUnmount called');
		let app = this.app;
		let mvcmyquote = this.getMvcMyQuoteObject();
		
	}
	
	
	render() {
		let {loaded, action, currencyinfo} = this.state;

		return (
			<div className="Screen">
				<Header app = {this.app} />
				{(loaded === true ?
				<CurrencyCardListView app = {this.app} /> :
				<div>{currencyinfo}</div>
				)}

			</div>
		);
	}
}

// propTypes validation
CurrencyCardListScreen.propTypes = {
	app: PropTypes.object.isRequired,
};



export default CurrencyCardListScreen;