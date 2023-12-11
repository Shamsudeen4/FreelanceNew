import React, { useState } from 'react'

function Practice() {
    const[toggle, settoggle] = useState(false)
    var Nav = ()=>{
        settoggle(!toggle)
    }
  return (
    <div className='flex gap-[10px] items-center justify-around p-[20px]'>
            <ul className={` flex gap-[10px] lg:hidden sm:hidden items-center justify-center`}> 
                <li>About</li>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            {/* menu list */}
            <button onClick={Nav} className='bg-black '>&#9776;</button>
            <div className="menu lg:hidden">
            <ul className={`${toggle ? 'block' : 'hidden'} flex flex-col gap-[10px] transition items-center justify-center bg-black text-white `}> 
                <li>About</li>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            </div>
    </div>
  )
}

export default Practice
