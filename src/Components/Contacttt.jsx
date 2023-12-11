import React from 'react'
import male from '../Images/Male User.png'
function Contacttt() {
  return (
    <div className=' font-poppins w-[100%]'>
          <div className=''>
            <div className='w-[100%] h-[12vh] bg-[#D9D9D980] sm:h-[12vh]'></div>
            <div className=' absolute -top-[1px] right-10'>
                <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-[80px] items-center lg:h-[90vh] justify-center sm:gap-[40px]'>
        <div className=''>
            <h1 className='text-[25px] font-semibold sm:text-[20px] sm:w-[60vw] sm:text-center'>Send WhatsApp Message to Business</h1>
        </div>
        <div className='flex flex-col gap-[30px] items-end sm:pl-9'>
            <div className='flex flex-col gap-6'>
            <div className=' '>
            <label htmlFor="" >
            Enter Company Name<span className='text-[red]'>*</span>
                </label><br/>
            <input type="text" className='border-2 rounded-[10px] w-[30vw] h-[3vw] text-center outline-none sm:w-[100%] sm:h-[6vh]' placeholder='Company Name' />
            </div>
            <div>
                <label htmlFor="">
                    Enter Message <span className='text-[red]'>*</span> 
                </label><br/>
                <textarea name=""  id="" cols="30" rows="10" className=' pl-4 pt-4 border-2 outline-none w-[100%]' placeholder='Your Message Here'></textarea>
            </div>
           
            </div>
            <div>
                <button className='bg-[black] px-[50px] text-[white] rounded-[10px] py-[10px]'>Send Message</button>
            </div>
        </div>
        <div>
       
        </div>
       </div>
    </div>
  )
}

export default Contacttt
