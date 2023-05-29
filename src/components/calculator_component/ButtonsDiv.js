import React from "react";
import '../../App.css';
import { Button } from './Button';

export function ButtonsDiv({ handleButtonClick }) {
  return (
    <div className="ButtonsDiv">
      <Button data='AC' color='#35303d5f' handleClick={handleButtonClick} />
      <Button data='+/-' color='#35303d5f' handleClick={handleButtonClick} />
      <Button data='%' color='#35303d5f' handleClick={handleButtonClick} />
      <Button data='/' color='#5e3996' handleClick={handleButtonClick} />

      <Button data='1' color='#35303d' handleClick={handleButtonClick} />
      <Button data='2' color='#35303d' handleClick={handleButtonClick} />
      <Button data='3' color='#35303d' handleClick={handleButtonClick} />
      <Button data='*' color='#5e3996' handleClick={handleButtonClick} />

      <Button data='4' color='#35303d' handleClick={handleButtonClick} />
      <Button data='5' color='#35303d' handleClick={handleButtonClick} />
      <Button data='6' color='#35303d' handleClick={handleButtonClick} />
      <Button data='-' color='#5e3996' handleClick={handleButtonClick} />

      <Button data='7' color='#35303d' handleClick={handleButtonClick} />
      <Button data='8' color='#35303d' handleClick={handleButtonClick} />
      <Button data='9' color='#35303d' handleClick={handleButtonClick} />
      <Button data='+' color='#5e3996' handleClick={handleButtonClick} />

      <Button data='0' color='#35303d' handleClick={handleButtonClick} />
      <Button data='.' color='#35303d' handleClick={handleButtonClick} />
      <Button data='=' color='#d0b7f7' handleClick={handleButtonClick} />
    </div>
  );
}
