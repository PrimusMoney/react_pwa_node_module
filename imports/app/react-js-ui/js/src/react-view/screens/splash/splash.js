import React, { Component } from 'react';

import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import PropTypes from 'prop-types';


class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		
		this.exec_env = this.app.exec_env;

		this.uuid = this.app.guid();
		
		let dev_message = '';
		
		if (this.exec_env == 'dev')
		dev_message = 'waiting for dev environment info...';
		
		this.state = {
				splashinfo: 'Primus Money\nAll rights reserved',
				dev_message: dev_message
		};
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('SplashScreen.componentDidMount called');
		
		if (this.exec_env != 'dev')
			return;
		
		let app = this.app;
		let mvcmyquote = app.getMvcMyQuoteObject();
		
		if (mvcmyquote)
		mvcmyquote.registerEventListener('on_app_refresh_logs', this.uuid, this.onRefreshLogs);

	}
	
	// end of life
	componentWillUnmount() {
		console.log('SplashScreen.componentWillUnmount called');
		let app = this.app;
		let mvcmyquote = app.getMvcMyQuoteObject();
		
		if (mvcmyquote)
		mvcmyquote.unregisterEventListener('on_app_refresh_logs', this.uuid);
	}
	
	async onRefreshLogs() {
		console.log('SplashScreen.onRefreshLogs called');
		
		let now = Date.now();
		
		this.setState({logs_refreshed_on: now});
	}
	
	renderDebugLogs() {
		return (<div></div>);
		/*return (<>
				<Button 
				onPress={this.onRefreshLogs}
				title="Refresh Splash logs"
				/>
				{this.app.renderDebugLogs()}
			</>
			);*/
	}

	renderSplashInfo() {
		return (
			<div className="Splash">
				<div>{this.state.splashinfo}</div>
				<div></div>
				<div>{this.state.dev_message}</div>
				<div></div>
				<div>loading app...</div>
				<Dots />
				<div></div>
				{this.renderDebugLogs()}
			</div>
		);

	}
	
	render() {
		return (
			<div>
				{this.renderSplashInfo()}
			</div>
		);
	}
}

// propTypes validation
SplashScreen.propTypes = {
	app: PropTypes.object.isRequired,
};



export default SplashScreen;