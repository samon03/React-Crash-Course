import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    return (<button style={{ backgroundColor: props.color }} className="btn">{props.text}</button>)
}

Button.defaultProps = {
    color: 'steelblue'
 }

 Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
 }
 

export default Button
