import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button 
            style={{ backgroundColor: props.color }} 
            className="btn"  onClick={props.onClick}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
 }

 Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
 }
 

export default Button
