import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { faMobileAlt, faGlobe, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrencyCardIcon = ({ app, currency, card }) => {
	var theapp = app
	var thecurrency = currency
	var thecard = card

	const onShowCurrencyCard = () => {
		let params = {currencyuuid: thecurrency.uuid, carduuid: (thecard ? thecard.uuid : null), cardaddress: (thecard ? thecard.address : null)};
		theapp.gotoRoute('currencycard', params);
	}

	return (
		<FontAwesomeIcon 
			icon={faCreditCard}
			size="3x"
			onClick={onShowCurrencyCard}
		/>

	);
};
  

export default CurrencyCardIcon;