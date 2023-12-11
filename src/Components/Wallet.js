import React from 'react'
import Sidebar from './Sidebar'
import Walle from './Walle'

function Wallet() {
  return (
    <div className='flex'>
      <Sidebar wallet="active"/>
      <Walle/>
    </div>
  )
}

export default Wallet
