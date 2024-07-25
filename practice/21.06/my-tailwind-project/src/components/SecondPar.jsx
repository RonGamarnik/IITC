import React from 'react';
import CardSecPar from './CardSecPar';
import snappyProcessIcon from '../images/icon-snappy-process.svg';
import affordablePricesIcon from '../images/icon-affordable-prices.svg';
import peopleFirstIcon from '../images/icon-people-first.svg'

function SecondPar() {
  return (
      <div className=' my-40 px-40'>
          <h2 className=' my-20 font-bold text-5xl'>We’re different</h2>
          <div className='flex gap-5'>
      <CardSecPar link={snappyProcessIcon}>
        <h2 className=' font-bold text-2xl my-3'>Snappy Process</h2>
        <p className=' font-extralight'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
          </CardSecPar>
          <CardSecPar link={affordablePricesIcon} >
              <h2 className=' font-bold text-2xl my-3'>Affordable Prices</h2>
              <p className=' font-extralight'>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
              
          </CardSecPar>
          <CardSecPar link={peopleFirstIcon}>
              <h2 className=' font-bold text-2xl my-3'>People First</h2>
              <p className=' font-extralight'>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
              </CardSecPar>
              </div> 
    </div>
  );
}

export default SecondPar;
