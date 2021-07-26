import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {

    return (
        <header className="header">
           <h1>{props.title}</h1> 
           <Button color={props.showAdd ? 'red' : 'green'} 
                   text={props.showAdd ? 'Close' : 'Add'} 
                   onClick={props.onAdd} 
           />
           {/* <Button color='red' text='Add 2' />
           <Button color='Blue' text='Add 3' /> */}
        </header>
    )
}


Header.propTypes = {
   title: PropTypes.string.isRequired
}

export default Header
