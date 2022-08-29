import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { faMobileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { doFetchContactList, doOpenContact } from '@primusmoney/react_client_wallet/imports/view/actions/contact/contact-actions.js';

import List from '../utils/list.js'


class ContactList extends React.Component {
	
	constructor(props) {
		super(props);

		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		
		this.parent = this.props.parent;

		this.state = {
				isContactListPending: false,
				contacts: []
		}
	}
	
	async _doFetchContactList(mvcmodule, sessionuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doFetchContactList(mvcmodule, sessionuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}
	
	async _doOpenContact(mvcmodule, sessionuuid, contactuuid) {
		const result = new Promise((resolve, reject) => { 
			this.props.doOpenContact(mvcmodule, sessionuuid, contactuuid, (err, res) => {
				if (err) reject(err); else resolve(res);
			});
		});
		
		return result;
	}
	
	// post render commit phase
	componentDidMount() {
		console.log('ContactList.componentDidMount called');
		let mvcmodule = this.getMvcModuleObject();
		let sessionuuid = this.props.rootsessionuuid;
		
		this._doFetchContactList(mvcmodule, sessionuuid)
		.catch(err => {
			console.log('error in ContactList.componentDidMount: ' + err);
		});
	}

	// user actions
	async onCreateContact() {
		console.log('onCreateContact clicked!');
		
		this.parent.setViewState('CREATE');
	}
	
	async onImportContactasync(){
		console.log('onImportContact clicked!');
		
		this.parent.setViewState('IMPORT');
	}

	async onRefresh() {
		console.log('onRefresh pressed!');
		
		let mvcmodule = this.getMvcModuleObject();
		let sessionuuid = this.props.rootsessionuuid;
		
		this._doFetchContactList(mvcmodule, sessionuuid)
		.catch(err => {
			console.log('error in ContactList.componentDidMount: ' + err);
		});
	}
	
	async onClickItem(item) {
		
		let sessionuuid = this.props.rootsessionuuid;
		let mvcmodule = this.getMvcModuleObject();

		let contactuuid = item.uuid;
		let contactname = item.name;
		let contactlabel = item.label;
		
		this._doOpenContact(mvcmodule, sessionuuid, contactuuid)
		.then((open) => {
			if (open) {
				// jump to ContactView
				this.app.gotoRoute('contact');
			}
		})
		.catch(err => {
			console.log('error in ContactList.onClickItem:' + err);
		});	
	}
	
	/*renderListBanner() {
		return (
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Text style={this.styles.title}>List of contacts</Text>
				</View>
				<View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 10}}>
					<Icon
						name='refresh-cw'
						type='feather'
						onPress={this.onRefresh}
					/>
				</View>
			</View>

		);
	}

	renderItem = ({ item }) => {
		let type = item.type
		let mvcmodule = this.getMvcModuleObject();
		let label = mvcmodule.fitString(item.label, 50);
		
		if (type == 0)
			return (
					<View style={this.styles.item}>
						<TouchableOpacity onPress={() => this.onClickItem(item)}>
							<View style={{flexDirection: 'row'}}>
							<Icon name='mobile-phone' type='font-awesome'/>
							<Text style={this.styles.itemlabel}>{label}</Text>
							</View>
						</TouchableOpacity>
					</View>
				);
		else if (type == 1)
			return (
					<View style={this.styles.item}>
						<TouchableOpacity onPress={() => this.onClickItem(item)}>
							<View style={{flexDirection: 'row'}}>
							<Icon name='earth' type='antdesign'/>
							<Text style={this.styles.itemlabel}>{label}</Text>
							</View>
						</TouchableOpacity>
					</View>
				);
		else
			return (<></>);
	}
	
	renderCreateImport() {
		return (
			<View style={this.styles.screenbuttons}>
			<TouchableOpacity onPress={this.onCreateContact}>
				<View style={this.styles.topscreenbutton}>
					<Text style={this.styles.screenbuttonlabel}>Create contact</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={this.onImportContact}>
				<View style={this.styles.bottomscreenbutton}>
					<Text style={this.styles.screenbuttonlabel}>Import contact</Text>
				</View>
			</TouchableOpacity>
			</View>
		);
	}*/
	
	renderItem(item){
		let mvcmodule = this.getMvcModuleObject();
		let type = item.type;
		let label = mvcmodule.fitString(item.label, 50);

		return (
			<div>
				<span>{(type == 0 ? <FontAwesomeIcon icon={faMobileAlt} /> : <FontAwesomeIcon icon={faGlobe} />)}</span>
				<span>{label}</span>
			</div>
		);
	}
	

	renderList() {
		const {isContactListPending} = this.state;
		
		if (isContactListPending) {
			const message = 'fetching contact list...';
			
			return (
				<div>{message}</div>
			);
		}
		
		let contacts = this.state.contactList;

		return (
			<div>
				<List items={contacts} onClickItem={(item) => this.onClickItem(item)} render={(item) => this.renderItem(item)} />
				{/*this.renderCreateImport()*/}
			</div>
		);
	}
	
	render() {
		return (
			<div>
				{/*this.renderListBanner()*/}
				<div>{this.state.bodyText}</div>
				<div></div>
				
				{this.renderList()}
			</div>
		);
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		var contactarray = nextProps.contacts;
		
		var contactList = [];
		
		for (var i = 0; i < (contactarray ? contactarray.length : 0); i++) {
			var key = contactarray[i].uuid;
			var uuid = contactarray[i].uuid;
			var name = contactarray[i].name;
			var label = contactarray[i].label;
			var type = contactarray[i].type;
			var description = contactarray[i].label + (contactarray[i].type === 0 ? '- local' : ' - remote');
			contactList.push({key: key, uuid: uuid, name: name, label: label, type: type, description: description});
		}
		
		let bodyText = 'list of ' + contactList.length + ' element(s)';
		
		return {
			bodyText: bodyText,
			isContactListPending: nextProps.isContactListPending,
			contactList: contactList
		};
	}

}

// propTypes validation
ContactList.propTypes = {
	app: PropTypes.object.isRequired,
	parent: PropTypes.object.isRequired,
	options: PropTypes.object,
	rootsessionuuid: PropTypes.string,
	isContactListPending: PropTypes.bool,
	contacts: PropTypes.array,
	fetchContactListError: PropTypes.any,
	doFetchContactList: PropTypes.func.isRequired,
	doOpenContact: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
	options: {}
};


//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		isContactListPending: state.contacts.pending,
		contacts: state.contacts.array,
		fetchContactListError: state.contacts.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		doFetchContactList: (mvcmodule, sessionuuid, callback) => dispatch(doFetchContactList(mvcmodule, sessionuuid, callback)),
		doOpenContact: (mvcmodule, sessionuuid, contactuuid, callback) => dispatch(doOpenContact(mvcmodule, sessionuuid, contactuuid, callback)),
	};
}


export {ContactList};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
