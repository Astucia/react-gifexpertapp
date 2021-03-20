import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryAdd = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState("Escriba una categoría para agregar");
    
    //Limpia la caja de texto
    const cleanInput = () =>{
        if(inputValue === "Escriba una categoría para agregar"){
            setinputValue('');             
        }
    }

    //Permite escribir en la caja de texto y almacena la información
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    //Maneja el enter y la insersión final de texto
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0){
            //console.log('Submit ejecutado ' + inputValue);
            setCategories(c => [inputValue,...c]);
            setinputValue('');    
        }
    }    
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
                onFocus={cleanInput}
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
};


