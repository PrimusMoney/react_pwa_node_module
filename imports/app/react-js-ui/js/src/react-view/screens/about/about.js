import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../../navigation/header/header.js';

import {isMobile,
	isMobileOnly,
	isTablet,
	isBrowser,
	isSmartTV,
	isWearable,
	isConsole,
	isAndroid,
	isWinPhone,
	isIOS,
	isChrome,
	isFirefox,
	isSafari,
	isOpera,
	isIE,
	isEdge,
	isYandex,
	isChromium,
	isMobileSafari,
	osVersion,
	osName,
	fullBrowserVersion,
	deviceDetect} from 'mobile-device-detect';



class AboutScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		this.getMvcMyQuoteObject = this.app.getMvcMyQuoteObject;

		let exec_env = this.app.exec_env;

		this.state = {
			exec_env,
			liabilitymessage: '',
			privacylink: 'https://www.primusmoney.com/privacy_en',
			versioninfo: {},
			settingsinfo: {},
			walletinfo: {},
			deviceinfo: {},
			connectioninfo: {},
			dev_info: {}
		};		
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('AboutScreen.componentDidMount called');
		
		let mvcmodule = this.getMvcModuleObject()
		let mvcmyquote = this.getMvcMyQuoteObject();

		let webapp_name = this.app.basename;
		let app_version = this.app.current_version;
		let mvcmodule_version = mvcmodule.current_version;
		let api_version = mvcmodule.getAPIVersion();
		
		let versioninfo = {};
		versioninfo.webapp = webapp_name;
		versioninfo.app_ver = app_version;
		versioninfo.mvc_ver = mvcmodule_version;
		versioninfo.api_ver = api_version;


		let deviceinfo = {};
		deviceinfo.osName = osName;
		deviceinfo.osVersion = osVersion;
		deviceinfo.fullBrowserVersion = fullBrowserVersion;
		
		let liabilitymessage = 	mvcmyquote.t(
			'This application is for demonstration purposes. It is provided free of charge \
			without any guarantee attached to it. \
			You should not use it in contexts where you may suffer losses relying on its \
			continued availability or proper functioning.'
		);

		// privacy url
		let privacylink = this.state.privacylink;
		let app_privacy_url = this.app.getConfig('privacy_url');

		if (app_privacy_url)
		privacylink = app_privacy_url;


		// version info
		this.setState({versioninfo, deviceinfo, liabilitymessage, privacylink});

		// dev info
		let app_exec_env = this.app.exec_env;

		if (app_exec_env != 'dev') {
			// return;
		}
		
		let dev_info = {};

		dev_info.app_exec_env = app_exec_env;
		dev_info.react_version = React.version;

		dev_info.mvc_exec_env = mvcmodule.getClientExecutionEnvironment();

		this.setState({dev_info});

		// async info
		this.checkContext();
	}

	async checkContext() {
		let mvcmodule = this.getMvcModuleObject()
		let mvcmyquote = this.getMvcMyQuoteObject();

		let rootsessionuuid = this.props.rootsessionuuid;

		// connecton
		let connectioninfo = {};

		let isonline = await this.mvcmyquote.checkOnline();

		connectioninfo.online_status_string = (isonline ? mvcmyquote.t('you are online') : mvcmyquote.t('you appear to be offline'));

		// local settings
		let settingsinfo = {};

		let webapp_name = this.app.basename;
		let firstboot = await this.mvcmyquote.readSettings(['firstboot']);
		let webapp_firstboot = ( firstboot[webapp_name] ? firstboot[webapp_name] : firstboot);

		settingsinfo.time_string = (webapp_firstboot.time ? mvcmyquote.formatDate(webapp_firstboot.time/1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('never'));
		settingsinfo.initial_time_string = (webapp_firstboot.initial_time ? mvcmyquote.formatDate(webapp_firstboot.initial_time/1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('never'));
		settingsinfo.last_update_string = (webapp_firstboot.last_update ? mvcmyquote.formatDate(webapp_firstboot.last_update/1000, 'YYYY-mm-dd HH:MM:SS') : mvcmyquote.t('never'));
		
		let walletinfo = {};

		let walletuuid = this.props.currentwalletuuid;
		
		let wallet = await mvcmodule.getWalletInfo(rootsessionuuid, walletuuid).catch(err => {});
		
		if (wallet) {
			walletinfo.name = wallet.name;
		}

		this.setState({settingsinfo, connectioninfo, walletinfo});

	}

	async onPrivacyLinkClick() {
		const {privacylink} = this.state;
		
		// jump
		await this.app.gotoUrl(privacylink);
	}


	
	// rendering
	renderAboutView() {
		const {versioninfo, deviceinfo, settingsinfo, connectioninfo, walletinfo, liabilitymessage, privacylink, exec_env, dev_info} = this.state;

		return (
			<div className="Container">
				<div className="Title">About Primus Money</div>
				<div>&nbsp;</div>
				<div className="TextBox">
					<div>{'web app: ' + versioninfo.webapp}</div>
					<div>{'app: ' + versioninfo.app_ver}</div>
					<div>{'mvc: ' + versioninfo.mvc_ver}</div>
					<div>{'api: ' + versioninfo.api_ver}</div>
				</div>
				<div className="TextBox">
					<div>{'os name: ' + deviceinfo.osName}</div>
					<div>{'os version: ' + deviceinfo.osVersion}</div>
					<div>{'browser version: ' + deviceinfo.fullBrowserVersion}</div>
				</div>

				<div>&nbsp;</div>
				<div className="TextBox">
					<div>{'last setup: ' + (settingsinfo.time_string ? settingsinfo.time_string : 'none') }</div>
					<div>{'last update: ' + (settingsinfo.last_update_string ? settingsinfo.last_update_string : 'none') }</div>
					<div>{'initial setup: ' + (settingsinfo.initial_time_string ? settingsinfo.initial_time_string : 'none') }</div>
				</div>
				<div className="TextBox">
					<div>{'online status: ' + (connectioninfo.online_status_string ? connectioninfo.online_status_string : '') }</div>
				</div>
				<div className="TextBox">
					<div>{'current wallet: ' + (walletinfo.name ? walletinfo.name : 'none') }</div>
				</div>

				<div>&nbsp;</div>
				<div className="TextBox">{liabilitymessage}</div>
				<div>&nbsp;</div>
				<div className="TextBox"><span>Privacy policy: </span><span className="ShareLink" onClick={this.onPrivacyLinkClick.bind(this)}>{privacylink}</span></div>
				
				<div>&nbsp;</div>
				{( exec_env == 'dev' ? 
				<div className='DevInfo'>
					<div>{'app env: ' + dev_info.app_exec_env}</div>
					<div>{'react: ' + dev_info.react_version}</div>
					<div>{'mvc env: ' + dev_info.mvc_exec_env}</div>


					<div>isMobile: {(isMobile ? 'true' : 'false')}</div>
					<div>isMobileOnly: {(isMobileOnly ? 'true' : 'false')}</div>
					<div>isTablet: {(isTablet ? 'true' : 'false')}</div>
					<div>isBrowser: {(isBrowser ? 'true' : 'false')}</div>
					<div>isSmartTV: {(isSmartTV ? 'true' : 'false')}</div>
					<div>isWearable: {(isWearable ? 'true' : 'false')}</div>
					<div>isConsole: {(isConsole ? 'true' : 'false')}</div>
					<div>isAndroid: {(isAndroid ? 'true' : 'false')}</div>
					<div>isWinPhone: {(isWinPhone ? 'true' : 'false')}</div>
					<div>isIOS: {(isIOS ? 'true' : 'false')}</div>
					<div>isChrome: {(isChrome ? 'true' : 'false')}</div>
					<div>isFirefox: {(isFirefox ? 'true' : 'false')}</div>
					<div>isSafari: {(isSafari ? 'true' : 'false')}</div>
					<div>isOpera: {(isOpera ? 'true' : 'false')}</div>
					<div>isIE: {(isIE ? 'true' : 'false')}</div>
					<div>isEdge: {(isEdge ? 'true' : 'false')}</div>
					<div>isYandex: {(isYandex ? 'true' : 'false')}</div>
					<div>isChromium: {(isChromium ? 'true' : 'false')}</div>
					<div>isMobileSafari: {(isMobileSafari ? 'true' : 'false')}</div>
					<div>deviceDetect: {(typeof deviceDetect !== 'undefined' ? JSON.stringify(deviceDetect()) : null)}</div>

				</div> 
				
				:
				<></>
				)}
			</div>
		);

	}
	render() {

		return (
			<div className="Screen">
				<Header app = {this.app} />
				{this.renderAboutView()}
			</div>
		);
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		return {
			rootsessionuuid: nextProps.rootsessionuuid,
		};
	}
}

// propTypes validation
AboutScreen.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	currentwalletuuid: PropTypes.string,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		currentwalletuuid: state.wallets.walletuuid,
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {AboutScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);