import React from 'react'
import logo from '../Images/Logo (2).png'

function Forgot1() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col mt-[15%]'>
            <div className='flex items-center justify-center'><img src={logo} alt="" /></div>
            <h5 className='mt-[10%]'>We’re sorry to hear that you forgot your password</h5>
            <form className='flex flex-col mt-5 gap-2'>
                <label htmlFor="">Email <span className='text-[red] '>*</span></label>
                <input className='border py-3 rounded-[20px] border-b-slate-950 text-center outline-none bg-gray-100' type="text" placeholder='Enter your email' />
                <button className='rounded-[5px] mt-[7%] lg:w-[35%] sm: w-[40%] bg-black text-white font-bold py-2'>Send</button>
            </form>

        </div>
    </div>
  )
}

export default Forgot1