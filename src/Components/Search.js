import React from 'react'
import Sidebar from './Sidebar'
import SearchClient from './SearchClient'

function Search() {
  return (
    <div className='flex'>
      <Sidebar search="active"/>
      <SearchClient/>
    </div>
  )
}

export default Search
