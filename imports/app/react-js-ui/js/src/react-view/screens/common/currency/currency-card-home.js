import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Header from '../../../navigation/header/header.js';

import CurrencyCardView from '../../../components/common/currency/currency-card-view.js';

class CurrencyCardHomeScreen extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;
		
		this.uuid = this.app.guid();
		
		
		this.state = {
			action: 'view',
			txhash: null,
			loaded: false,
			cardinfo: 'loading...',
		};
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('CurrencyCardHomeScreen.componentDidMount called');
		let mvcmyquote = this.app.getMvcMyQuoteObject();
		
		mvcmyquote.registerEventListener('on_refreshPage', this.uuid, this.onRefreshPage.bind(this));
		
		this.checkNavigationState().catch(err => {console.log('error in checkNavigationState: ' + err);});
	}
	
	async checkNavigationState() {
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;
		
		let app_nav_target = this.app.getNavigationState('target');


		this.setState({loaded: true});
	}

	async onRefreshPage() {
		console.log('CurrencyCardHomeScreen.onRefreshPage called');

		return this.checkNavigationState().catch(err => {console.log('error in checkNavigationState: ' + err);});
	}
	

	// end of life
	componentWillUnmount() {
		console.log('CurrencyCardHomeScreen.componentWillUnmount called');
		let app = this.app;
		let mvcmyquote = this.getMvcMyQuoteObject();
		
		mvcmyquote.unregisterEventListener('on_refreshPage', this.uuid);
	}

	renderCardView() {
		switch(this.state.action) {
			case 'view':
				return (<CurrencyCardView app = {this.app}/>);
			case 'load':
				return (<div>Not implemented {this.state.action}</div>);
			default:
				return (<div>Error, wrong action {this.state.action}</div>);
		}
	}
	
	
	render() {
		let {loaded, action, cardinfo} = this.state;

		return (
			<div className="Screen">
				<Header app = {this.app} />
				{(loaded === true ?
				this.renderCardView()
				: <div>{cardinfo}</div>)}
			</div>
		);
	}
}

// propTypes validation
CurrencyCardHomeScreen.propTypes = {
	app: PropTypes.object.isRequired,
};



export default CurrencyCardHomeScreen;