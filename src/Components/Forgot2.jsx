import React from 'react'
import logo from '../Images/Logo (2).png'

function Forgot2() {
  return (
    <div className='flex items-center justify-center'>
       <div className='flex flex-col mt-[8%]'>
             <div className='items-center flex justify-center'><img src={logo} alt="" /></div>
             <div className='flex flex-col ml-[5%]'>
                <p className='lg:w-[60%] font-bold mt-[10%] lg:ml-20 flex'>Password reset link has been sent to your email, please check to continue</p>     
                 <a className='text-[#3CD442] font-bold mt-8 lg:ml-20' href="">Go back to login</a>
             </div>
       </div>
    </div>
  )
}

export default Forgot2