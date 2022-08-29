// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Locker {
	mapping (address => string) private _values;

	mapping(address => string[]) private _records;

	// string value
	function store(string memory value) public payable {
		address client = msg.sender;
		_values[client] = value;
	}

	function retrieve(address client) public view returns (string memory) {
		return _values[client];
	}

	// array of strings
	function register(string memory value) public payable {
	    address client = msg.sender;

    	_records[client].push(value);
	}

	function fetch(address client) public view returns (string[] memory) {
		return _records[client];
	}

}