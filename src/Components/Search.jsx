import React from 'react'

const Search = ({setSearchText}) => {
  return (
    <div>
        <input type="text" 
        placeholder='search notes.....' 
        onChange={(e)=>setSearchText(e.target.value)}
        />
    </div>
  )
}

export default Search