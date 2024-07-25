import React from 'react';
import instegramIcon from '../images/icon-instagram.svg';
import facebookIcon from '../images/icon-facebook.svg';
import logo from '../images/logo.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import twitterIcon from '../images/icon-twitter.svg';

function Footer() {
  
  return (
    <div className='mt-80 bg-slate-50 bg-footer bg-no-repeat'>
      <div className='flex border-b-2 border-b-slate-700 justify-between px-11 py-4 pt-10'>
        <img src={logo} alt="Company Logo" />
        <div className='flex gap-2'>
          <img src={facebookIcon} alt="Facebook Icon" />
          <img src={twitterIcon} alt="Twitter Icon" />
          <img src={pinterestIcon} alt="Pinterest Icon" />
          <img src={instegramIcon} alt="Instagram Icon" />
        </div>
      </div>
      <div className='flex justify-between font-bold p-10'>
        <div className='flex flex-col'>
          <h2 className='text-slate-300 mb-4'>Our company</h2>
          <ul className='space-y-2'>
            <li><a href="#">How we work</a></li>
            <li><a href="#">Why Insure</a></li>
            <li><a href="#">View plans</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-slate-300 mb-4'>Help Me</h2>
          <ul className='space-y-2'>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-slate-300 mb-4'>Contact</h2>
          <ul className='space-y-2'>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-slate-300 mb-4'>Others</h2>
          <ul className='space-y-2'>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Licenses</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
