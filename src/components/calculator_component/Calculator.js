import React, {useState} from 'react';
import '../../App.css';
import {ButtonsDiv} from './ButtonsDiv';

export function Calculator(){
    const [inputValue,setInputValue] = useState("");
    const [outputValue,setOutputValue] = useState("");

    const handleChange = (event) => {
        const input = event.target.value;
        const allowedCharacter = input.replace(/[^0-9+\-*/%]/g, ''); 
        setInputValue(allowedCharacter || 0); 
    };

    
    const handleButtonClick = (buttonValue) => {
        if(buttonValue === 'AC'){
            setInputValue((prevValue) => prevValue='');
            setOutputValue((prevValue) => prevValue='');
        }
        else if (buttonValue === '=') {
            setOutputValue((prevValue) => {
              try{
                const result = eval(inputValue); 
                return String(result); 
              }
              catch(ex){
                console.log(ex);
                return prevValue;
              }
            });
        }
        else if(buttonValue === '+/-'){
            setInputValue((prevValue) => prevValue);
        }
        else{
            setInputValue((prevValue) => prevValue === 0 ?  buttonValue : prevValue + buttonValue);
        }
    };

    return(
        <div className='Main'>
            <input id='text' className='TextField' value={inputValue} onChange={handleChange} placeholder='0'/>
            <input id='text' className='TextField' value={outputValue} onChange={handleChange} placeholder='0' readOnly/>
            <div className='Inputs'>
                <ButtonsDiv handleButtonClick={handleButtonClick} />
            </div>
        </div>
    );
}