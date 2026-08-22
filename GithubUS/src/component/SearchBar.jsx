import React , {useState} from 'react'


function SearchBar() {

    const [username , setUsernname] = useState("")
  return (
    <div>
      <input placeholder='Enter username' />
      <button>Search</button>
    </div>
  )
}

export default SearchBar
