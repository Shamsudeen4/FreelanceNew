import React from 'react'
import logo from '../Components/image/Logo.png'

function Signup() {
  return (
    <>
    <div className='mt-[25px] flex flex-col items-center justify-center p-[10px]'>
      <img src={logo} alt="" />
      <div className='flex flex-col items-start'>
        <div>
      <form className=' mt-[25px]  flex flex-col gap-[20px]' action="">
        <div className='flex flex-col '>
            <label className='font-[poppins] font-semibold' htmlFor="">Username <span className='text-[red]'>*</span></label>
            <input className='border w-[50vw] py-3 rounded-[15px] text-center border-b-black border-b-[2px] outline-none mt-[10px] bg-[#F5F5F5] hover:border-b-[#3CD442]' type="text" placeholder='Your Username Here' />
        </div>
        <div className='flex flex-col '>
           <label  className='font-[poppins] font-semibold' htmlFor="">Email <span className='text-[red]'>*</span></label>
            <input className='border w-[50vw] py-3 rounded-[15px] text-center border-b-black border-b-[2px] outline-none bg-[#F5F5F5] mt-[10px] hover:border-b-[#3CD442]' type="text"  placeholder='info@FreelanceHQ.com'/>
        </div>
        <div className='flex flex-col '>
           <label  className='font-[poppins] font-semibold' htmlFor="">Password <span className='text-[red]'>*</span></label>
            <input className='border w-[50vw] py-3 rounded-[15px] text-center border-b-black bg-[#F5F5F5] outline-none border-b-[2px] mt-[10px] hover:border-b-[#3CD442]' type="password" placeholder='********' />
        </div>
        <div className='flex flex-col '>
           <label  className='font-[poppins] font-semibold' htmlFor="">Confirm Password <span className='text-[red]'>*</span></label>
            <input className='border w-[50vw] py-3 rounded-[15px] text-center border-b-black border-b-[2px] outline-none bg-[#F5F5F5] mt-[10px] hover:border-b-[#3CD442]' type="password" placeholder='**********'/>
           </div>    
        </form>
        </div>
    
    <div className='flex flex-col items-start mt-4 gap-3'>
          <button className='p-[18px] w-[15vw]  bg-black text-white rounded-[10px]'>Sign Up</button>
          <p className='font-[inter] font-semibold'>Already have an account? <span className='text-[#3CD442]'>Login</span></p>
     </div>
     </div>
    </div>
    </>
  )
}

export default Signup