import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';


class ContactView extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		
		this.parent = this.props.parent;
		
		this.state = {
			contactlabel: 'loading...',
			contactinfotext: 'loading contact info...'
		};
	}
	
	// post render commit phase
	componentDidUpdate(prevProps) {
		console.log('ContactView.componentDidUpdate called');
		let mvcmodule = this.getMvcModuleObject();
		
	}
		
	componentDidMount() {
		console.log('ContactView.componentDidMount called');
		let mvcmodule = this.getMvcModuleObject();
		let sessionuuid = this.props.rootsessionuuid;
		
		let contactuuid = this.state.contactuuid;
		
		mvcmodule.getContactInfo(sessionuuid, contactuuid)
		.then((contact) => {
			var contactinfotext = '';
			
			contactinfotext += 'Contact name: ' + contact.name + '\n';
			contactinfotext += 'Contact label: ' + contact.label + '\n';
			contactinfotext += '\n';
			contactinfotext += 'Contact uuid: ' + contact.uuid + '\n';
			contactinfotext += 'Contact address: ' + contact.address + '\n';
			contactinfotext += 'Contact rsa public key: ' + contact.rsa_public_key + '\n';
			
			this.setState({contactlabel: contact.label, contactinfotext, contactinfo: contact});
		})
		.catch(err => {
			
		});
		
		
	}
	
	// user actions
	async onModify() {
		console.log('onModify pressed!');
		
		this.parent.setViewState('MODIFY');
	}
	
	async onSend() {
		console.log('onSend pressed!');
		
		this.parent.setViewState('SEND');
	}
	


	// rendering
	/*renderBanner() {
		return (
			<View style={{flexDirection: 'row'}}>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Text style={this.styles.title}>{this.state.contactlabel}</div>
				</View>
				<View style={{flex: 1, flexDirection: 'row-reverse', marginTop: 10}}>
					<Icon
						name='edit'
						type='feather'
						onPress={this.onModify}
					/>
					<View style={{margin: 10}}/>
					<Icon
						name='send'
						type='feather'
						onPress={this.onSend}
					/>
				</View>
			</View>

		);
	}
		
	renderTransferButtons() {
		return (
			<>
			<TouchableOpacity onPress={this.onTransferTo}>
				<View style={this.styles.topscreenbutton}>
					<Text style={this.styles.screenbuttonlabel}>Transfer tokens to</div>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={this.onRequestFrom}>
			<View style={this.styles.bottomscreenbutton}>
				<Text style={this.styles.screenbuttonlabel}>Request tokens from</div>
			</View>
		</TouchableOpacity>
			</>
		);
	}*/
	
	renderContactInfo() {
		const contactinfo = this.state.contactinfo;
		
		if (contactinfo) {
			return (
				<>
					<div><div>{'Contact label: '}</div></div>
					<div>{contactinfo.label}</div>
					<div><div>{'Contact email: '}</div></div>
					<div>{(contactinfo.email ? contactinfo.email : '')}</div>
					<div><div>{'Contact phone: '}</div></div>
					<div>{(contactinfo.phone ? contactinfo.phone : '')}</div>
					<div><div>{'Contact address: '}</div></div>
					<div>{contactinfo.address}</div>
					<div><div>{'Contact rsa public key: '}</div></div>
					<div>{(contactinfo.rsa_public_key ? contactinfo.rsa_public_key : '')}</div>
				</>
			);
		}
		else {
			return (
				<div>{this.state.contactinfotext}</div>
			);
		}
		
	}
	
	async onTransferTo() {
		console.log('onTransferTo clicked!');
		
	}

	async onRequestFrom() {
		console.log('onRequestFrom clicked!');
		
	}


	
	render() {
		return (
			<div>
				{/*this.renderBanner()*/}
				{this.renderContactInfo()}
			<div></div>
			{/*{this.renderTransferButtons()}*/}
			</div>
		);
	}
	
	// static functions
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		
		return {
			contactuuid: nextProps.currentcontactuuid,
			lasterror: nextProps.lasterror
		};
	}

}

// propTypes validation
ContactView.propTypes = {
	app: PropTypes.object.isRequired,
	parent: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	currentcontactuuid: PropTypes.string,
    lasterror: PropTypes.any,
};



//redux
const mapStateToProps = (state) => {
  return {
		rootsessionuuid: state.session.sessionuuid,
		schemes: state.schemes.array,
		currentcontactuuid: state.contacts.contactuuid,
		lasterror: state.contacts.error
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {ContactView};
export default connect(mapStateToProps, mapDispatchToProps)(ContactView);


