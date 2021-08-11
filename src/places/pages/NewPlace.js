import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input'; 
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
    const tittleInputHandler = useCallback((id, value, isValid) => {
         
    }, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {
         
    }, []);
     
    return (
    <form className="place-form">
        <Input
        id="tittle"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Title."
        onInput={tittleInputHandler}
        />
         <Input
         id="description"
        element="textarea"
        label="D escription"
        validators={[VALIDATOR_MINLENGTH (5)]}
        errorText="Please enter a valid Description (at least 5 characters)."
        onInput={descriptionInputHandler}
        />
    </form>
    );
};

export default NewPlace;