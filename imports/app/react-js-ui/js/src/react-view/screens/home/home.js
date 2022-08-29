import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';


import Header from '../../navigation/header/header.js';

import LoginForm from '../../components/common/login/login-form.js';


class HomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		// load dynamic home links
		const HomeLinks = require('./homelinks/homelinks.js');
		this.homelinks = HomeLinks.default.getHomeLinks(this.app);

		this.state = {
		};		
	}
	
	componentDidMount() {
		console.log('HomeScreen.componentDidMount called');
		
		// check if should login
		const {iswalletlocked} = this.state;

		console.log('HomeScreen.componentDidMount iswalletlocked = ' + iswalletlocked);

		if (iswalletlocked === false) {
			// check wallet is really unlocked
			this.app.checkWalletUnlocked()
			.catch(err => {
			});
		}
	}

	renderHomeLink(item, index) {
		switch (item.type) {
			case 'link':
				return (<div key={index} className="HomeLink"><Link to={{ pathname: item.pathname }}>{item.label}</Link></div>);
			case 'separator':
				return (<hr key={index}></hr>);
			default:
				return (<></>);
		}
	}

	renderHomeLinks() {
		const {walletname} = this.state;

		return (
			<div className="Container">
				<div className="Banner">
					<div>You are using the account<br></br>{(walletname ? walletname : 'Wallet')}</div>
				</div>
				<div className="Block">
					
					{this.homelinks.map((item, index) => {
						return (this.renderHomeLink(item, index));
					})}

				</div>
			</div> 
		);
	}

	
	render() {
		const {iswalletlocked} = this.state;

		return (
			<div className="HomeScreen">				
				<Header app = {this.app} />
				
				<div className="HomeBanner">Home</div>

				{(iswalletlocked !== false ? 
				<LoginForm app={this.app} parent={this} />	:
				this.renderHomeLinks())}
				
			</div>
		);
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		return {
			rootsessionuuid: nextProps.rootsessionuuid,
			walletname: nextProps.currentwallet,
			walletuuid: nextProps.currentwalletuuid,
			unlockpending: nextProps.unlockpending,
			iswalletlocked: nextProps.iswalletlocked,
		};
	}
}

// propTypes validation
HomeScreen.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	currentwallet: PropTypes.string,
	currentwalletuuid: PropTypes.string,
	unlockpending: PropTypes.bool,
	iswalletlocked: PropTypes.bool,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		currentwallet: state.wallets.walletname,
		currentwalletuuid: state.wallets.walletuuid,
		unlockpending: state.wallets.openpending,
		iswalletlocked: state.wallets.islocked,
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {HomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);