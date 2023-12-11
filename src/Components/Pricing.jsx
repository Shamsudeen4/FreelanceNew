import React from 'react'

function Pricing() {
  return (
    <div className=' min-h-screen w-full p-10 bg-[white]  items-center flex flex-col'>
        <h1 className='text-center bg-black text-white capitalize w-[100%] lg:w-[50%] p-5 text-2xl'>Our Pricing</h1>
       <div className='flex flex-col lg:flex-row w-[100%] gap-10   mt-10 justify-center items-center'>
       <div className=' w-full lg:w-[30%] 'style={{border:"5px solid black",height:"80vh",  borderRadius:"30px" }}>
            <h1 className='mt-5 text-3xl text-center'>Free</h1>
          <ul className="list-disc p-10 text-lg">
            <li>3 Free searches per day</li>
            <li>2 Companies per search</li>
            <li>Get access to client’s whatsapp number</li>
            <li>Get access to client’s email</li>
            <li>Unlimited Message</li>
            <li>Can save client’s contact</li>
            </ul>
            <h1 className='text-center text-3xl'>Price: N5000/Month</h1>
          </div>
          <div className='w-full lg:w-[30%]  'style={{border:"5px solid #3CD442",height:"80vh",  borderRadius:"30px" }}>
            <h1 className='mt-5 text-3xl text-center'>Basic</h1>
          <ul className="list-disc p-10 text-lg">
            <li>100 searches per month</li>
            <li>5 Companies per search</li>
            <li>Get access to client’s whatsapp number</li>
            <li>Get access to client’s email</li>
            <li>Unlimited Message</li>
            <li>Can save client’s contact</li>
            <li>Unlimited search per day</li>
            </ul>
            <h1 className='text-center text-3xl'>Price: N5000/Month</h1>
          </div>
       </div>
       <div className='w-full text-white bg-[#3BD442] lg:w-[30%] mt-10  'style={{border:"5px solid #3CD442",height:"80vh",  borderRadius:"30px" }}>
            <h1 className='mt-5 text-3xl text-center text-black'>Premium</h1>
          <ul className="list-disc p-10 text-lg">
            <li>Unlimited searches per month</li>
            <li>20 Companies per search</li>
            <li>Get access to client’s whatsapp number</li>
            <li>Get access to client’s email</li>
            <li>Unlimited Message</li>
            <li>Can save client’s contact</li>
            <li>Unlimited search per day</li>
            </ul>
            <h1 className='text-center text-3xl'>Price: N10,000/Month</h1>
          </div>
    </div>
  )
}

export default Pricing