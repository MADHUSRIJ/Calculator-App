import React from 'react';
import '../../App.css';

export function Button({ data, color, handleClick }) {
  let flexBasis = 'calc(15% - 10px)';

  if (data === '0') {
    flexBasis = 'calc(42.5% - 10px)';
  }

  const buttonStyle = {
    backgroundColor: color,
    flexBasis: flexBasis,
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px',
  };

  const handleClickButton = () => {
    handleClick(data);
  };

  return (
    <div className='Button' style={buttonStyle} onClick={handleClickButton}>
      {data}
    </div>
  );
}
