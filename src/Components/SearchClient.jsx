import React from 'react'
import '../App.css'
// import { FaLongArrowAltRight,aGoogle,FaFacebook} from "react-icons/fa";
import male from '../Images/Male User.png'
function SearchClient() {
  return (
    <div className=' flex flex-col overflow-hidden font-poppins w-[100%] sm:pl-5  '>
      <div>
        <div className=''>
        <div className='flex justify-between items-center  w-[100%] lg:h-[12vh]  sm:h-[9vh] bg-[#D9D9D980]'>
                 <h1 className=" lg:pl-[200px] font-bold lg:text-[25px] sm:pl-[165px]">Search Client</h1>
                 <img src={male} className="sm:w-[15vw]" alt="" />
            </div>
           
        </div>
       <div className='flex flex-col gap-[80px] items-center lg:h-[85vh] justify-center sm:gap-[60px] sm:h-[90vh]'>
        <div className=''>
            <h1 className='text-[25px] font-semibold sm:w-[50vw] sm:text-center sm:text-[20px]'>Let's help you achieve your aim</h1>
        </div>
        <div className='flex flex-col gap-[30px] items-end sm:items-center'>
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
                        <h3>1. Kayokayo </h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>2. Abyxc </h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>3. Hugestomach </h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>4. Kindergatto1</h3>
                        <h3>Dm on WhatsApp</h3>
                    </li>
                    <li className='flex gap-5 justify-between sm:text-[15px]'>
                        <h3>5. Stomach Care </h3>
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
