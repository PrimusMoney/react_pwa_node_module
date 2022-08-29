import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { doCheckLoggedIn } from '@primusmoney/react_client_wallet/imports/view/actions/login/login-actions.js';

import Header from '../../navigation/header/header.js';
import LogoutForm from '../../components/common/login/logout-form.js';



class LogoutScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		this.state = {
		};		
	}
	
	componentDidUpdate(prevProps) {
		console.log('LogoutScreen.componentDidUpdate called');
		let mvcmodule = this.getMvcModuleObject();
		
	}
	
	render() {
		return (
			<div className="Screen">
				<Header app = {this.app}/>
				<LogoutForm app = {this.app} />
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
LogoutScreen.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	doCheckLoggedIn: PropTypes.func.isRequired,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
		doCheckLoggedIn: (mvcmodule, sessionuuid) => dispatch(doCheckLoggedIn(mvcmodule, sessionuuid)),
	};
}


export {LogoutScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);