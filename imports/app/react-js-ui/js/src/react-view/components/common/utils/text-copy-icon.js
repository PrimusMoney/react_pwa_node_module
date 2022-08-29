import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextCopyIcon = ({ app, text, message }) => {
	var theapp = app;
	var thetext = text;
	var themessage = message;

	const onCopyToClipboard = ()  => {
		// create a textarea on the fly, then remove it to
		// be able to copy to clipboard
		var textArea = document.createElement("textarea");
		textArea.value = thetext;

		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("Copy");
		textArea.remove();

		if (themessage && themessage.length)
		theapp.alert(themessage);
	}

	return (
		<FontAwesomeIcon 
			icon={faCopy}
			size="1x"
			onClick={onCopyToClipboard}
		/>

	);
};
  

export default TextCopyIcon;