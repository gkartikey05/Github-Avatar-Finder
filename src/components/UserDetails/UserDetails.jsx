import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './UserDetails.css'
import Search from '../Search/Search'
import { useParams } from 'react-router-dom'


function UserDetails() {
  const {username} = useParams();
  const [user, setUser] = useState({});
  async function downloadUser(){
    const response = await axios.get(`https://api.github.com/users/${username}`)
    setUser({
      username: response.data.login,
      image: response.data.avatar_url,
      name: response.data.name
    })
  }

  useEffect(() => {
    downloadUser()
  }, []);

  return (
    <div className='user-detail-wrapper'>
      <Search/>
      <div className='detail-wrapper'>
        <img className='user-detail-image' src={user.image} alt="" />
        <div className='user-detail-name'>User Name: <div className='style'>{user.username}</div></div>
        <div className='user-detail-name'>Name: <div className='style'>{user?.name}</div></div>
      </div>
    </div>
  )
}

export default UserDetails
