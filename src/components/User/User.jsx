import { useState } from 'react'
import Search from '../Search/Search'
import UserList from '../UserList/UserList'
import UserDetails from '../UserDetails/UserDetails'
import './User.css'

function User() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div className='user-wrapper'>
      <Search updateSearchTerm={setSearchTerm} />
      {(!searchTerm) ? 
        <UserList /> : 
        <UserDetails name={searchTerm} key={searchTerm} />
      }
    </div>
  )
}

export default User;