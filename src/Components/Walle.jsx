import React from 'react'
import male from '../Images/Male User.png'
function Walle() {
  return (
    <div className=' flex flex-col overflow-hidden font-poppins w-[100%]  '>
      <div>
        <div className=''>
            <div className='w-[100%] h-[12vh] bg-[#D9D9D980]  sm:h-[9vh]'></div>
            <div className=' absolute -top-[1px] right-10'>
                <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
        </div>
       <div className='flex flex-col gap-[60px] items-center lg:h-[86vh] justify-center sm:pt-5 '>
       <div className='flex flex-col gap-[25px] items-end sm:items-center'>
            <div className='flex  border-4 lg:p-20 border-solid sm:px-[45px] sm:py-[15px] sm:flex-col sm:items-center sm:text-center border-[#3CD442] rounded-[20px]  gap-[30px]'>
                <div>
                    <h3 className="sm:text-[14px]">Available Balance</h3>
                    <h1 className='text-[25px] font-bold' >N5,000.00</h1>
                </div>
                <div>
                    <h3>Approximate Coins</h3>
                    <h1 className='text-[25px] font-bold'>50000000</h1>
                </div>
            </div>
            <div>
                <button className='bg-[black] px-[50px] text-[white] rounded-[10px] py-[10px] sm:px-[15px]'>Fund Wallet</button>
            </div>
        </div>
        <div className='flex items-start flex-col gap-10 font-semibold sm:gap-8 sm:pl-8' >
            <h2 className='text-[20px] sm:text-[15px]'>Recent Transactions</h2>
        <ul className='flex flex-col gap-5 sm:gap-4'>   
                    <li className='flex gap-8 justify-between sm:text-[13px] sm:gap-4' >
                        <h3>1. Account funding of N5,000</h3>
                        <h3>20/10/2023</h3>
                    </li>
                    <li className='flex gap-8 justify-between sm:text-[13px] sm:gap-4'>
                        <h3>1. Account funding of N5,000</h3>
                        <h3>20/11/2023</h3>
                    </li>
                    <li className='flex gap-8 justify-between sm:text-[13px] sm:gap-4'>
                        <h3>1. Account funding of N5,000</h3>
                        <h3>20/12/2023</h3>
                    </li>
                    <li className='flex gap-8 justify-between sm:text-[13px] sm:gap-4'>
                        <h3>1. Account funding of N5,000</h3>
                        <h3>20/05/2024</h3>
                    </li>
                    <li className='flex gap-[90px] justify-between sm:text-[13px] sm:gap-4'>
                        <h3>1. Account funding of N5,000</h3>
                        <h3>20/10/2024</h3>
                    </li>
                    
        </ul>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Walle
