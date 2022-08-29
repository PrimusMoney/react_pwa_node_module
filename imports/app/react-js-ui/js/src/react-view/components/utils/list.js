import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';

const List = ({ items, onClickItem, render }) => {
	if (!items)
		return <div></div>;

	return (
		<ListGroup>
			{(items ?
			items.map((item, index) => {
					return (<ListGroup.Item key={item.uuid} value={item.uuid} onClick={() => onClickItem(item)}>{(render ? render(item) : (item.label ? item.label : 'unknown'))}</ListGroup.Item>);
				}	
			) :
			<ListGroup.Item>loading...</ListGroup.Item>
			)}
			{/*this.renderCreateImport()*/}
		</ListGroup>
	);
};
  
// propTypes validation
List.propTypes = {
	items: PropTypes.array.isRequired,
	onClickItem: PropTypes.func,
	render: PropTypes.func,
};

export default List;