import React from 'react'

function Contact() {
  return (
    <div className='flex items-center justify-center font-[Poppins]'>
        <div className='flex flex-col lg:w-[45%] sm: w-[80%]'>            
            <h5 className='sm: mt-[20%] lg:mt-[6%] font-semibold text-center lg:text-[30px]'>Send WhatsApp Message to Business</h5>
            <form className='flex flex-col mt-12 gap-8 '>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Old Password <span className='text-[red] '>*</span></label>
                    <input className='border py-3 rounded-[20px] border-[#00000080] text-center outline-none bg-gray-100' type="text" placeholder='Company name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">New Password <span className='text-[red] '>*</span></label>
                    <textarea className='border border-[#00000080] py-3 rounded-[20px] text-center outline-none bg-gray-100' name="" id="" cols="30" rows="10" placeholder= 'Your message here ..'></textarea>
                </div>
                <button className='rounded-[5px] mt-[5%] lg:w-[25%]  lg:ml-[75%] sm: ml-[60%] sm: w-[40%] bg-black text-white font-bold py-2'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact