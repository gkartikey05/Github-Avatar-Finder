import { useEffect, useRef, useState } from 'react';
// import axios from 'axios'
import Search from '../Search/Search'
import UserList from '../UserList/UserList'
import './User.css'
// import UserDetails from '../UserDetails/UserDetails'

function User() {
  
  
  return (
    <div className='user-wrapper'>
      <Search />
      <UserList/>
    </div>
  )
}

export default User;