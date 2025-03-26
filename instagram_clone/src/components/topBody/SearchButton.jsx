import React from 'react'
import { GoSearch } from "react-icons/go";

function Nav() {
  return (
    <div className='search-bar'>
      <GoSearch size={15} className='search-icon' />
      <input type="search" placeholder='Search'/>
    </div>
  )
}

export default Nav
