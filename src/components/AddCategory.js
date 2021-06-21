import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit done');
        if(inputValue.trim().length > 2) {
            setCategories(categs => [ inputValue, ...categs ] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
