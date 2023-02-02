import React from 'react'
import {MdSearch} from 'react-icons/md'


function Search({handleSearchNote}) {
  return (
    <div className='search-bar-container'>
        <MdSearch className='search-icon'/>
        <input type="text" className='search-bar' placeholder='search..' onChange={e => handleSearchNote(e.target.value) }/>
    </div>
  )
}

export default Search