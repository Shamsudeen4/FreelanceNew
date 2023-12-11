import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function Dashbord() {
  return (
    <div className='flex'>
      <Sidebar dashboard="active"/>
      <Dashboard/>
    </div>
  )
}

export default Dashbord
