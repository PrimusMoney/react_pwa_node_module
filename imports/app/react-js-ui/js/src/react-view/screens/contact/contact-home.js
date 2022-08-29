import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../../navigation/header/header.js';

import ContactView from '../../components/contact/contact-view.js';
import ContactModifyForm from '../../components/contact/contact-modify-form.js';
import ContactSendForm from '../../components/contact/contact-send-form.js';


class ContactHomeScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		this.state = {
			operation: 'VIEW'
		}
		
	}
	
	setViewState(flag) {
		this.setState({operation: flag});
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('ContactHomeScreen.componentDidMount called');
		let mvcmodule = this.getMvcModuleObject();
		let sessionuuid = this.props.rootsessionuuid;
	}
	
	// end of life
	componentWillUnmount() {
		console.log('ContactHomeScreen.componentWillUnmount called');
	}
	
	// user actions
	

	// rendering
	renderContent() {
		switch(this.state.operation) {
			case 'VIEW':
				return (<ContactView
							app={this.app}
							parent={this}
						/>);
			case 'MODIFY':
				return (<ContactModifyForm
							app={this.app}
							parent={this}
						/>);
			case 'SEND':
				return (<ContactSendForm
							app={this.app}
							parent={this}
						/>);
			default:
				return (<div>Error, wrong operation {this.state.operation}</div>);
		}
	}
	
	render() {
		return (
			<div>
				<Header app={this.app} />

				<div>
					{this.renderContent()}
				</div>
			</div>
		);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state

		return {
			lasterror: nextProps.lasterror
		};
	}

}


// propTypes validation
ContactHomeScreen.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	currentcontactuuid: PropTypes.string,
	lasterror: PropTypes.any,
};


//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		currentcontactuuid: state.contacts.contactuuid,
		lasterror: state.contacts.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
}

export {ContactHomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ContactHomeScreen);
