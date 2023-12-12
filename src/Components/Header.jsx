import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className='flex justify-around items-center p-[20px]'>
            <h2>Logo</h2>
            <ul className='flex gap-[15px] '>
                <Link to={"/Signup"}><li>Home</li></Link>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
export default Header