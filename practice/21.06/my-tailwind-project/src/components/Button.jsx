import React from 'react';

function Button({ children, link = "#" }) {
  return (
    <button 
      onClick={() => window.location.href = link} 
      className='border-black border-2 bg-inherit  *:hover: bg-DarkViolet px-4 py-2'>
      {children}
    </button>
  );
}

export default Button;
