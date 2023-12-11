import React from 'react'
import male from '../Images/Male User.png'
function Setting() {
  return (
<div className=' flex flex-col overflow-hidden font-poppins w-[100%]  '>
      <div>
        <div className=''>
            <div className='w-[100%] lg:h-[12vh] sm:h-[9vh] bg-[#D9D9D980]'></div>
            <div className=' absolute -top-[1px] right-10'>
                <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
        </div>
       <div className='flex flex-col gap-[80px] items-center h-[85vh] justify-center'>
        <div className='items-center'>
            <h1 className='text-[25px] font-semibold sm:w-[60vw] sm:text-center sm:text-[22px]'>Let's help you achieve your aim</h1>
        </div>
        <div className='flex flex-col gap-[30px] items-end'>
            <div className='flex flex-col  gap-[30px]'>
            <div className=''>
                <label htmlFor="" >
                    Old Password<span className='text-[red]'>*</span>
                </label><br/>
                <input type="password" className=' outline-none border-2 rounded-[10px] w-[30vw] h-[3vw] text-center sm:w-[58vw] sm:h-[8vw]' placeholder='*********' />
            </div>
            <div>
                <label htmlFor="">
                    New Password <span className='text-[red]'>*</span>
                </label><br/>
                <input type="password" className='outline-none border-2 rounded-[10px] w-[30vw] h-[3vw] text-center sm:w-[58vw] sm:h-[8vw]' placeholder='*********' />
            </div>
            </div>
            <div>
                <button className='bg-[black] px-[50px] text-[white] rounded-[10px] py-[10px] sm:px-[15px] sm:py-[8px] sm:text-[15px]'>Search</button>
            </div>
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default Setting
