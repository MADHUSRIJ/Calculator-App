import React, {useState} from 'react';
import '../../App.css';
import {ButtonsDiv} from './ButtonsDiv';
import { evaluate } from 'mathjs';

export function Calculator(){
    const [value,setValue] = useState("");

    const handleChange = (event) => {
        const input = event.target.value;
        const allowedCharacter = input.replace(/[^0-9+\-*/%]/g, ''); 
        setValue(allowedCharacter || 0); 
    };

    
    const handleButtonClick = (buttonValue) => {
        if(buttonValue === 'AC'){
            setValue((prevValue) => prevValue='');
        }
        else if (buttonValue === '=') {
            setValue((prevValue) => {
              const result = evaluate(prevValue); 
              return String(result); 
            });
        }
        else if(buttonValue === '+/-'){
            setValue((prevValue) => prevValue);
        }
        else{
            setValue((prevValue) => prevValue === 0 ?  buttonValue : prevValue + buttonValue);
        }
    };

    return(
        <div className='Main'>
            <input id='text' className='TextField' value={value} onChange={handleChange} placeholder='0'/>
            <div className='Inputs'>
                <ButtonsDiv handleButtonClick={handleButtonClick} />
            </div>
        </div>
    );
}