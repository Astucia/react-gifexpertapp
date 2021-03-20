import React, { useState }  from 'react';
//import PropTypes from 'prop-types';
//import userEvent from '@testing-library/user-event';
import {CategoryAdd} from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);
    /*
    const handleAdd = () => {        
        setCategories(c => [...categories, "No Cats"] );
    }
    */


    return (
        <>        
            <h2>GifExpertApp</h2>
            <hr />
            <CategoryAdd setCategories={setCategories} />
            <ol>
                {
                    categories.map( category => (                        
                        //return <li key={category}>{category}</li>
                        <GifGrid 
                            key={category}
                            category={category}                         
                        />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;
