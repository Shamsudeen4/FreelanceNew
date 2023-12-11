import React from 'react'
import { FaLongArrowAltRight,FaGoogle,FaFacebook} from "react-icons/fa";
import {FaXTwitter,FaLinkedin, FaRedditAlien,FaSquareInstagram } from "react-icons/fa6"

function Home() {
  return (
    <>
    <div className=' min-h-screen bg-white p-10 w-full  justify-center items-center flex '>
        <div className=' flex flex-col lg:flex-row w-full '>
         <div className='w-full '>
            <div className=' w-full lg:w-[85%] ' style={{borderLeft:"10px solid #3BD442", borderTop:" 10px solid #3BD442", }}>
              <img src="/freelance 1.png" alt="" style={{position:"relative", left:"0px", height:"70vh",   }} />
            </div>
         </div>
         <div className='w-full flex flex-col justify-center '>
            <h1 className=' text-green-500 text-4xl '>Are you a freelance website developer?</h1>
            <p className='text-2xl mt-5' >FreelanceHQ software will help you <br /> detect company or business that need <br /> your service and will you get paid high!</p>
            <button class=" mt-5 flex flex-row items-center gap-10 text-white bg-black w-full lg:w-[40%] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started <FaLongArrowAltRight />
            </button>
         </div>
        </div>
    </div>
    <div className='bg-green-300 h-[25vh] p-10 w-full flex justify-center gap-10 items-center'>
    <FaGoogle style={{height:"200vh", width:"5%"}} />
    <FaXTwitter style={{height:"200vh", width:"5%"}}  />
    <FaFacebook style={{height:"200vh", width:"5%"}} />
    <FaLinkedin style={{height:"200vh", width:"5%"}} />
    <FaRedditAlien style={{height:"200vh", width:"5%"}} />
    <FaSquareInstagram  style={{height:"200vh", width:"5%"}}/>



    </div>
    </>
  )
}

export default Home
