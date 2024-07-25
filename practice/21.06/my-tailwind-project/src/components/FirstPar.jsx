import React from 'react';
import introImage from '../images/image-intro-desktop.jpg';
import Button from './Button';

function FirstPar() {
  return (
    <div className='bg-DarkViolet text-white px-56 py-11 bg-firstBack bg-no-repeat bg-right flex h-2/5 relative overflow-visible'>
      <div className=' w-7/12 my-11'>
        <h2 className='font-bold text-6xl w-9/12'>Humanizing your insurance.</h2>
        <p className='w-10/12 text-s py-3'>
          Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
        </p>
             <Button link="#">VIEW PLANS</Button>
      </div>
      <div className='w-4/12  absolute right-20 top-24  overflow-visible'>
        <img src={introImage} alt='Intro' className=' w-full h-full object-contain' />
      </div>

    </div>
  );
}

export default FirstPar;
