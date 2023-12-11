import React from 'react'
import '../App.css'
// import { FaLongArrowAltRight,aGoogle,FaFacebook} from "react-icons/fa";
import male from '../Images/Male User.png'
function SearchClient() {
  return (
    <div className=' flex flex-col overflow-hidden font-poppins w-[100%]  '>
      <div>
        <div className=''>
            <div className='w-[100%] h-[12vh] sm:h-[9vh] bg-[#D9D9D980]'></div>
            <div className=' absolute -top-[1px] right-10'>
                <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
        </div>
       <div className='flex flex-col gap-[80px] items-center lg:h-[85vh] justify-center sm:gap-[60px] sm:h-[90vh]'>
        <div className=''>
            <h1 className='text-[25px] font-semibold sm:w-[50vw] sm:text-center sm:text-[20px]'>Let's help you achieve your aim</h1>
        </div>
        <div className='flex flex-col gap-[30px] items-end'>
            <div className='flex flex-col  gap-[30px] sm:pl-8'>
            <div className=''>
                <label htmlFor="" >
                    Enter the industry keyword<span className='text-[red]'>*</span>
                </label><br/>
                <input type="text" className=' outline-none border-2 rounded-[10px] w-[30vw] h-[3vw] text-center sm:w-[65vw] sm:h-[7vh]' placeholder='e.g Neurosurgeon In Tanzania' />
            </div>
            <div>
                <label htmlFor="">
                    Enter country <span className='text-[red]'>*</span>
                </label><br/>
                <input type="text" className='outline-none border-2 rounded-[10px] w-[30vw] h-[3vw] text-center sm:w-[65vw] sm:h-[7vh]' placeholder='e.g Tanzania' />
            </div>
            </div>
            <div>
                <button className='bg-[black] px-[50px] text-[white] rounded-[10px] py-[10px]'>Search</button>
            </div>
        </div>
        <div>
        <ul className='flex flex-col gap-2'>   
                    <li className='flex gap-5 justify-between sm:text-[15px]' >
                        <h3>1. Kayokayo Restaurant</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>2. Abyxc Restaurant</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>3. Hugestomach Restaurant</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>4. Kindergatto1 Restaurant</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>5. Stomach Care Restaurant</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    
        </ul>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SearchClient
