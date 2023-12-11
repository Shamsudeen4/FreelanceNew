import React, { useState } from 'react'
import dashbod from '../Images/Dashboard.png'
import search from '../Images/Human Research Program.png'
import settings from '../Images/Mechanistic Analysis.png'
import contacts from '../Images/Profiles.png'
import wallet from '../Images/Card Wallet.png'
import logout from '../Images/Move Down.png'
import logo from '../Images/Logo (2).png'
import { Link } from 'react-router-dom'
function Sidebar(props) {
    const[side, setSide]= useState(false)
    const toggle = () => {
        setSide(!side)
    }


  return (
    <div className='flex flex-col items-center h-[100vh] absolute'>
      <div className={`flex flex-col bg-[white] h-[100vh] lg:items-center sm:items-center   ${side ? 'gap-[58px]' : 'gap-[92px]'} ${side ? 'sm:w-[55vw]' : 'sm:w-[15vw]'} `}>
        <div className='pt-5 flex gap-6 items-center justify-center'>
            <img className={`${side ? 'block' : 'hidden'} w-[8vw] transition-all sm:w-[30vw]`} src={logo} alt="" />
            <div className='cursor-pointer ' onClick={toggle}>
                <div className='bg-[black] m-[3px] w-[25px] h-[0.5vh]'></div>
                <div className='bg-[black] m-[3px] w-[25px] h-[0.5vh]'></div>
                <div className='bg-[black] m-[3px] w-[25px] h-[0.5vh]'></div>
            </div>
        </div>
        <div className="flex flex-col items-start gap-[70px]">
        <div className='flex flex-col lg:items-center sm:items-start justify-center gap-[30px] sm:w-[100%] '>
           <Link className={props.dashboard} to="/dashboard"> <div  className={` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } ${side ? 'lg:pl-[4px]' : 'lg:pl-[0px]' } sm:w-[100%] hover:bg-[#79eb7f] cursor-pointer   flex gap-2 items-center  py-[5px] transition-all`}>
                <img className={`lg:w-[3.5vw] pl-1 sm:w-[15vw]`} src={dashbod} alt="" />
             <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold text-[20px] sm:text-[18px] transition-all`}>Dashboard</h2>
            </div>
            </Link>
            <Link className={props.search} to="/search">
            <div className={` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } sm:w-[100%] cursor-pointer  flex items-center hover:bg-[#79eb7f] py-[5px] transition-all`}>
                <img className={`lg:w-[4vw] sm:w-[15vw] `} src={search} alt="" />
                <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold text-[20px] sm:text-[18px] transition-all sm:`}>Search Client</h2> 
            </div>
            </Link>
            <Link className={props.contacts} to="/contact">
            <div className={` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } sm:w-[100%] cursor-pointer  flex items-center hover:bg-[#79eb7f]  py-[5px] transition-all`}>
                <img className={`lg:w-[4vw] sm:w-[15vw]`} src={contacts} alt="" />
                 <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold text-[20px] sm:text-[18px] transition-all`}>Contacts</h2> 
            </div>
            </Link>
            <Link className={props.wallet} to="/wallet">
            <div className={` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } sm:w-[100%] cursor-pointer  flex items-center hover:bg-[#79eb7f] py-[5px] transition-all`}>
                <img className={`lg:w-[4vw] sm:w-[15vw]`} src={wallet} alt="" />
                <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold text-[20px] sm:text-[18px] transition-all`}>Wallet</h2> 
            </div>
            </Link>
            <Link className={props.settings} to="/settings">
            <div className={` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } sm:w-[100%] cursor-pointer  flex items-center hover:bg-[#79eb7f] py-[5px] transition-all`}>
                <img className={`lg:w-[4vw] sm:w-[15vw]`} src={settings} alt="" />
                <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold lg:text-[20px] sm:text-[18px] transition-all`}>Settings</h2> 
            </div>
            </Link>
        </div>
        <Link className={props.logout} to="/logout">
        <div className= {` ${side ? 'lg:w-[15vw]' : 'lg:w-[4vw]' } sm:w-[100%] cursor-pointer  ${side ? 'pl-[10px]' : 'pl-[0px]' } hover:bg-[#79eb7f] gap-2 pb-3 flex items-center   py-[5px] transition-all`}>
            <img className={`lg:w-[3.5vw] pl-1 sm:w-[15vw]`} src={logout} alt="" />
            <h2 className={`${side ? 'block' : 'hidden'} font-poppins font-semibold text-[20px] sm:text-[18px] transition-all`}>Log Out</h2> 
        </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
