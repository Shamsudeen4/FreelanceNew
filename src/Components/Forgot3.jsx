import React from 'react'
import logo from '../Images/Logo (2).png'

function Forgot3() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col mt-[10%]'>
            <div className='flex items-center justify-center'><img src={logo} alt="" /></div>
            <h5 className='mt-[10%]'>We’re sorry to hear that you forgot your password</h5>
            <form className='flex flex-col mt-10 gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="">Email <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-b-slate-950 text-center outline-none bg-gray-100' type="text" placeholder='***********' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Confirm New Password <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-b-slate-950 text-center outline-none bg-gray-100' type="text" placeholder='***********' />
                </div>
                <button className='rounded-[5px] mt-[9%] lg:w-[35%] sm: w-[40%] bg-black text-white font-bold py-2'>Change</button>
            </form>

        </div>
    </div>
  )
}

export default Forgot3