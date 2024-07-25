import React from 'react';

function CardSecPar({ link, children }) {
  return (
    <div className=' w-1/3'>
      <div>
        <img src={link} alt="Icon" />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default CardSecPar;
