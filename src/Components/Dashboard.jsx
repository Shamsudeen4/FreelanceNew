import React from 'react'
import male from '../Images/Male User.png'
function Dashboard() {
  return (
    <div className=' overflow-hidden font-poppins w-[100%] '>
      <div>
        <div className=''>
        <div className='flex justify-between items-center  w-[100%] lg:h-[12vh]  sm:h-[9vh] bg-[#D9D9D980]'>
                 <h1 className=" lg:pl-[200px] font-bold lg:text-[25px] sm:pl-[165px]">Dashboard</h1>
                 <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
           
        </div>
        <div className='flex flex-col items-center justify-center pt-20 gap-[30px]'>
            <div className='flex flex-col gap-[30px] items-center font-poppins border-[2px] border-solid border-[#3CD442] lg:p-20 sm:py-11 sm:px-4 rounded-[20px] sm:text-center'>
                <h1 className='lg:text-[30px] sm:text-[25px] font-semibold sm:w-[60vw]'>Good Afternoon Tosh</h1>
                <h2 className='text-[20px] sm:w-[50vw] sm:text-center'>User Type: Premium Service</h2>
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
