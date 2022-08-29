import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';



class LogoutForm extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		
		this.state = {
		}
	}
	
	async onResetSession() {
		console.log('LogoutScreen.onResetSession pressed!');
 
		this.app.logout();
	}
	
	render() {
		return (
			<div className="Container LogoutContainer">
				<div className="Instructions">Do you want to close the current session?</div>
				<div>
					<Button onClick={this.onResetSession.bind(this)} type="submit">
						Logout
					</Button>
				</div>
			</div>
		  );
	}
	
}


// propTypes validation
LogoutForm.propTypes = {
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


export {LogoutForm};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);

