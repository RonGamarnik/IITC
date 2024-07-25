import React from 'react';
import Button from './Button';

function ThirdDiv() {
  return (
    <div className='flex justify-center items-center h-2/5 mb-10'>
      <div className='bg-DarkViolet w-1/2 text-white px-20 py-11 bg-firstBack bg-no-repeat bg-right overflow-visible'>
            <div className=' w-1/2 mb-4'>
                  <h2 className=' text-4xl '>Find out more about how we work</h2>
        </div>
             <Button link="#">VIEW PLANS</Button>
      </div>
    </div>
  );
}

export default ThirdDiv;
