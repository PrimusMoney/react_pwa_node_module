import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import { faHome, faLock, faUnlock, faMobileAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from 'prop-types';

class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.app = this.props.app;
		this.getMvcModuleObject = this.app.getMvcModuleObject;

		this.closing = false;
		
		// load dynamic menu links
		const MenuLinks = require('./menulinks/menulinks.js');
		this.webapp_menulinks = MenuLinks.default.getMenuLinks(this.app);

		this.state = {
			isLoggedIn: false,
			hasOpenWallet: false,
			isdevicewallet: false,
			hasReturnPath: false
		}
	}	

	// post render commit phase
	componentDidUpdate(prevProps, prevState) {
		console.log('Header.componentDidUpdate called');

		if (this.props.currentwalletuuid) {
			let rootsessionuuid = this.props.rootsessionuuid;
			let walletuuid = this.props.currentwalletuuid;
			
			// check if wallet it is not the device wallet
			if (walletuuid && (this.state.isdevicewallet !== true))
			this.app.isDeviceWallet(walletuuid)		
			.then((isdevicewallet) => {
				if ((this.closing !== true) && (isdevicewallet === true))
				this.setState({isdevicewallet});
			})
			.catch(err => {
				console.log('error in Header.componentDidUpdate: ' + err);
			});
		}
	}
		
	componentDidMount() {
		console.log('Header.componentDidMount called');

		// check wallet is unlocked
		this.app.checkWalletUnlocked()
		.then((unlocked) => {
			return unlocked;
		})
		.catch(err => {
			console.log('error in Header.componentDidMount: ' + err);
		});

		// check has a return path
		this.app.hasReturnPath()
		.then((canreturn) => {
			if (canreturn)
			this.setState({hasReturnPath: true});

			return canreturn;
		})
		.catch(err => {
			console.log('error in Header.componentDidMount: ' + err);
		});

	}

	// end of life
	componentWillUnmount() {
		this.closing = true;
	}

	// render
	renderLock() {
		const {hasOpenWallet, isdevicewallet} = this.state;

		return (
			<span>
			{(hasOpenWallet === true ? 
			<span className="Lock">
			<FontAwesomeIcon className="LockIcon" icon={faUnlock} /> 
			{(isdevicewallet === true ? <FontAwesomeIcon className="DeviceIcon" icon={faMobileAlt} /> : <></>)} </span> : 
			<FontAwesomeIcon className="LockIcon" icon={faLock} />)}
			</span>
		);


	}

	renderMenuLink(item, index) {
		switch (item.type) {
			case 'link':
				return (<LinkContainer key={index} to={item.route}><NavDropdown.Item>{item.label}</NavDropdown.Item></LinkContainer>);
			case 'click':
				return (<LinkContainer key={index} to={item.route}><NavDropdown.Item onClick={item.onclick}>{item.label}</NavDropdown.Item></LinkContainer>);
			case 'separator':
				return (<NavDropdown.Divider key={index} />);
			default:
				return (<></>);
		}
	}

	_getMenuLinks() {
		const {hasOpenWallet, hasReturnPath} = this.state;

		var menulinks = [];

		if (hasOpenWallet !== true) {
			menulinks.push({type:'click', route: 'login', onclick: () => {this.app.gotoRoute('login');}, label: 'Login'});
		}
		menulinks.push({type:'link', route: 'logout', label: 'Logout'});

		if (hasReturnPath) {
			menulinks.push({type:'click', route: 'exit', onclick: () => {this.app.returnToCaller();}, label: 'Exit'});
		}

		// add extra links
		if (this.webapp_menulinks && this.webapp_menulinks.length) {
			menulinks = menulinks.concat(this.webapp_menulinks);
		}

		menulinks.push({type:'separator'});
		menulinks.push({type:'link', route: 'currencycards', label: 'Currency Cards'});

		menulinks.push({type:'separator'});
		menulinks.push({type:'link', route: 'deeplink', label: 'Enter url'});

		menulinks.push({type:'separator'});
		menulinks.push({type:'link', route: 'datawipe', label: 'Wipe all data'});

		menulinks.push({type:'separator'});
		menulinks.push({type:'link', route: 'about', label: 'About'});

		return menulinks;
	}


	render() {
		const menulinks = this._getMenuLinks();

		return (
			<div className='Header'>
				<Navbar bg="light" variant="light" expand="lg">
					<Navbar.Brand>
						<Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
					</Navbar.Brand>
					{this.renderLock()}
					<NavDropdown title={<FontAwesomeIcon icon={faBars} />} id="basic-nav-dropdown">

						{menulinks.map((item, index) => {
							return (this.renderMenuLink(item, index));
						})}

					</NavDropdown>
				</Navbar>
			</div>
		);
	}
	 
	static getDerivedStateFromProps(nextProps, prevState) {
		// fill state
		return {
			isLoggedIn: nextProps.isLoggedIn,
			hasOpenWallet: ((nextProps.currentwalletuuid) && (nextProps.iswalletlocked === false) ? true : false),
		};
	}
}

// propTypes validation
Header.propTypes = {
	app: PropTypes.object.isRequired,
	rootsessionuuid: PropTypes.string,
	isLoggedIn: PropTypes.bool,
	lastLoggedInCheck: PropTypes.number,
	loggedInCheckPending: PropTypes.bool,
	currentwalletuuid: PropTypes.string,
	unlockpending: PropTypes.bool,
	iswalletlocked: PropTypes.bool,
};

//redux
const mapStateToProps = (state) => {
	return {
		rootsessionuuid: state.session.sessionuuid,
		isLoggedIn: state.login.success,
		loggedInCheckPending: state.login.checkpending,
		lastLoggedInCheck: state.login.checkedon,
		currentwallet: state.wallets.walletname,
		currentwalletuuid: state.wallets.walletuuid,
		unlockpending: state.wallets.openpending,
		iswalletlocked: state.wallets.islocked,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
}

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);