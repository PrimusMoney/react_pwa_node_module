import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Header from '../../navigation/header/header.js';


import ContactList from '../../components/contact/contact-list.js';
import ContactCreateForm from '../../components/contact/contact-create-form.js';
import ContactImportForm from '../../components/contact/contact-import-form.js';


class ContactListScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		this.state = {
			operation: 'LIST_VIEW'
		}
	}
	
	setViewState(flag) {
		this.setState({operation: flag});
	}
	
	componentDidMount() {
		console.log('ContactListScreen.componentDidMount called');
		let mvcmodule = this.getMvcModuleObject();
		let sessionuuid = this.props.rootsessionuuid;
		
	}
	
	renderContent() {
		switch(this.state.operation) {
			case 'LIST_VIEW':
				return (<ContactList 
							app={this.app}
							parent={this}
						/>);
			case 'CREATE':
				return (<ContactCreateForm 
							app={this.app}
							parent={this}
				/>);
			case 'IMPORT':
				return (<ContactImportForm 
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
		};
	}

}

// propTypes validation
ContactListScreen.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {ContactListScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ContactListScreen);

