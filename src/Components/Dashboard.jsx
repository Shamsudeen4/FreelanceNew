import React from 'react'
import male from '../Images/Male User.png'
function Dashboard() {
  return (
    <div className=' overflow-hidden font-poppins w-[100%] '>
      <div>
        <div className=''>
            <div className='w-[100%] h-[12vh] bg-[#D9D9D980]'></div>
            <div className=' absolute -top-[1px] right-10'>
                <img src={male} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center pt-20 gap-[30px]'>
            <div className='flex flex-col gap-[30px] items-center font-poppins border-[2px] border-solid border-[#3CD442] p-20 rounded-[20px]'>
                <h1 className='text-[30px] font-semibold'>Good Afternoon Tosh</h1>
                <h2 className='text-[20px]'>User Type: Premium Service</h2>
            </div>
            <div className='flex flex-col gap-[25px] items-start'>
                <h3 className='font-bold '>Recent Searches</h3>
                <ul>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                    <li>1. Laptop shops in Tanzania</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
