import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';


import Header from '../../navigation/header/header.js';



class DataWipeScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		this.state = {
		};		
	}
	
	componentDidUpdate(prevProps) {
		console.log('DataWipeScreen.componentDidUpdate called');
		let mvcmodule = this.getMvcModuleObject();
		
	}
	
	async onWipeData() {
		console.log('DataWipeScreen.onDataWipe pressed!');
 
		this.app.wipedata();
	}

	renderWipeDataForm() {
		return (
			<div className="Container LogoutContainer">
				<div className="Instructions">Do you want to erase all data in this browser?</div>
				<div className="Instructions">This can not be undone!</div>
				<div>
					<Button onClick={this.onWipeData.bind(this)} type="submit">
						Wipe
					</Button>
				</div>
			</div>
		);		
	}
	
	render() {
		return (
			<div className="Screen">
				<Header app = {this.app}/>
				{this.renderWipeDataForm()}
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
DataWipeScreen.propTypes = {
	app: PropTypes.object.isRequired
};

//redux
const mapStateToProps = (state) => {
	return {
	};
} 

const mapDispatchToProps = (dispatch) => {
	return {
	};
}


export {DataWipeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(DataWipeScreen);