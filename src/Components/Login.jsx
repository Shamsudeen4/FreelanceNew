import React from 'react'
import logo from '../Components/image/Logo.png'

function Login() {
  return (
    <>
    <div className=' flex flex-col justify-center  items-center mt-5 gap-[35px] h-[100vh] w-[100%]  '>
        <img src={logo} alt="" />
        <h3>Welcome Back, happy to see you again!</h3>
        <div className='flex flex-col items-start gap-8'>
        <div>
        <form className='flex flex-col mt-[25px] lg:w-[80%] sm:w-[70%] w-[70%] gap-[25px] ' action="">
            <div className='flex flex-col'>
                <label className='font-[poppins] font-semibold' htmlFor="">Username <span className='text-[red]'>*</span></label>
                <input className=' w-[40vw] border py-3 rounded-[15px] text-center border-b-black border-b-[2px] outline-none mt-[10px] bg-[#F5F5F5] hover:border-b-[#3CD442]' type="text" placeholder='Your Username Here' />
            </div>
            <div className='flex flex-col'>
                <label className='font-[poppings] font-semibold' htmlFor="">Password <span className='text-[red]'>*</span></label>
                <input className='border w-[40vw] py-3 rounded-[15px] border-b-black border-b-[2px] mt-[10px] bg-[#F5F5F5] text-center outline-no hover:border-b-[#3CD442]' type="password" placeholder='**********' />
            </div>
           
        </form>
        </div>
        <div className='flex flex-col gap-4 '>
                <p className='text-[#3CD442]'>Forgot password?</p>
                <button className='p-[15px] bg-black text-white  rounded-[9px] '>Login</button>
                <p className='font-[inter] font-bold'>Don’t have an account? <span className='text-[#3CD442] '>Sign Up</span></p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login