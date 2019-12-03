import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ title }) => {
    return (
		<div className="section-title">
			<h4>{title}</h4>
			<div></div>
		</div>
    );
};


Component.propTypes = {
    title: PropTypes.string,
};

export default Component;
