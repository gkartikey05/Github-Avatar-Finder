import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../UserProfile/UserProfile';
import './UserList.css'


function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const UserUrl = "https://api.github.com/users"


  async function downloadUser(){
    const response = await axios.get(UserUrl);
    const userResults = response.data;

    const result = userResults.map((userData) => {
      return {
        id: userData.id,
        name: userData.login,
        image: userData.avatar_url,
      };
    })

    console.log(result);
    setUserList(result);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadUser()
  }, [setUserList]);
  
  return (
    <div className='user-list-wrapper'>
      <div className='user-list'>
        {
          (isLoading) ? ': Data Downloading...' : 
            userList.map((u) => <UserProfile name={u.name} image={u.image} key={u.id}/>)
        }
      </div>
    </div>
  )
}

export default UserList;