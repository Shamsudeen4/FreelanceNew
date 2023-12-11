import React from 'react'
import Sidebar from './Sidebar'
import Setting from './Setting'

function Settings() {
  return (
    <div className='flex'>
      <Sidebar settings="active"/>
        <Setting/>
    </div>
  )
}

export default Settings
