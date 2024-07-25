import React from 'react'
import logo from '../images/logo.svg'
import Button from './Button'

function NavBar() {
  return (
      <div className=' flex flex-row justify-between px-52 py-8'>
          <div className=' mt-3'><img src={logo}></img></div>
          <ul className='flex flex-row gap-8 align items-center'>
              <li>HOW WE WORK</li>
              <li>BLOG</li>
        <li>ACOUNTS</li>
        <Button link="#">VIEW PLANS</Button>
          </ul>

    </div>
  )
}

export default NavBar