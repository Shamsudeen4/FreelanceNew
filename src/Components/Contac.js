import React from 'react'
import Sidebar from './Sidebar'
import Contact from './Contacttt'

function Contac() {
  return (
    <div className='flex'>
      <Sidebar contacts="active"/>
      <Contact/>
    </div>
  )
}

export default Contac
