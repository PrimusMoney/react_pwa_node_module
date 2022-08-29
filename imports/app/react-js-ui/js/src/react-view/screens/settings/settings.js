import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Button, Picker, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import DrawerHeader from '../../components/drawer/drawer-header.js';



export default class SettingsScreen extends React.Component {
	
	constructor(props) {
		super(props);
		
		
		this.app = this.props.screenProps.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;
		
		this.root = this.props.screenProps.root;
		this.main = this.props.screenProps.main; // not null if under MainScreen
		this.secondary = this.props.screenProps.secondary; // not null if under SecondaryScreen

		if (!this.root)
			this.root = (this.main ? this.main.root : (this.secondary ? this.secondary.root : null));
		
		this.styles = this.app.composeStyles(styles);

		let logs = this.app.settings['general'].store_logs;

		this.state = {
				logs: logs
		};		
	}
	
	onSwitchLogs = async () => {
		let settings = this.app.getSettings();
		
		if (this.state.logs) {
			this.app.store_logs = false;
			settings['general'].store_logs = false;
			
			this.app.capture_logs = false;
			settings['general'].capture_logs = false;
			
			this.app.App.releaseLogs();
			
			this.setState({logs: false}); 
		}
		else {
			this.app.store_logs = true;
			settings['general'].store_logs = true;
			
			this.app.capture_logs = true;
			settings['general'].capture_logs = true;
			
			this.app.App.captureLogs();
			
			this.setState({logs: true});
		}
		
		this.app.saveSettings()
	}
	
	renderCaptureLogs(form) {
		return (
			<View style={{ flexDirection: 'row' }}>
				<Text style={this.styles.blocktext}>Capture logs</Text>
				<Switch onValueChange = {this.onSwitchLogs} value = {this.state.logs}/>
			</View>
		);
	}
	
	renderLanguageSelection(form) {
		let languageList = [{label: 'English', uuid: 'EN'}]
		let items = languageList.map( (item, i) => {
			return <Picker.Item style={this.styles.pickeritem} key={i} value={item.uuid} label={item.label} />
		});
		
		return (
			<View style={{ flexDirection: 'row' }}>
			<Text style={this.styles.blocktext}>UI language:</Text>
			<Picker
				style={this.styles.picker}
				selectedValue={this.state.selectedLanguageValue}
				onValueChange={ (itemValue, itemIndex) => ( this.setState({selectedLanguageValue: itemValue}) ) }
			>
				{items}
			</Picker>
			</View>
			);
	}
	
	renderForm(form) {
		return (
			<View style={this.styles.settings}>
			{this.renderCaptureLogs(form)}
			{this.renderLanguageSelection(form)}
			</View>
		);
	}
	
	getForm() {
		let mvcmodule = this.getMvcModuleObject();
		
		let form = {};
		
		return form;
	}
	
	render() {
		let form = this.getForm();
		
		return (
			<View style={this.styles.screen}>
				<View style={this.styles.header}>
					<DrawerHeader 
						title="Settings" 
						app={this.app}
						root={this.root}
						main={this.main}
						secondary={this.secondary}
					/>
				</View>
					
				<View style={this.styles.container}>
					{this.renderForm(form)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1 
	},
	header: {
	},
	container: {
		padding: 20,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	settings: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	blocktext: {
		fontSize: 14,
		fontFamily: 'Roboto',
	},
	blocktextinput: {
		fontSize: 14,
		fontFamily: 'Roboto',
	},
	picker: {
		flex:1,
		width: 250
	},
	pickeritem: {
		
	},
});
