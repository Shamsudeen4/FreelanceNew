import React from 'react'

function Footer() {
  return (
    <div className='min-h-screen bg-black text-white w-full p-10 flex flex-col justify-center '>
        <div className='flex flex-col  gap-10 lg:flex-row w-full'>
            <div className='w-full'>
                <h2 className="text-[#3CD442] text-3xl">
                Freelance<span className="text-[#ffff]">HQ</span>
                </h2>
                <p className='mt-5 text-lg'>FreelanceHQ is a software built mainly for website designer, website developer, digital marketer and Ui/Uix Designer. It help them look out for companies, businesses around the world that need their services (Majorly website design but can also be used for other digital services)</p>
            </div>
            <div className='w-full'>
                <h1 className='text-[#3CD442] text-3xl'>Quick links</h1>
                <ul className='mt-5'>
                    <li> <a href="/a"> About Us </a></li>
                    <li> <a href="/a"> Terms and conditions </a></li>
                    <li> <a href="/s"> How It Works </a></li>
                    <li> <a href="/c"> Sign Up </a></li>
                    <li> <a href="/c"> Sign In </a></li>
                    <li> <a href="Z"> Pricing </a></li>
                </ul>

            </div>
            {/* <div className='w-full'>
                <h1></h1>
            </div> */}
        </div>
    </div>
  )
}

export default Footer