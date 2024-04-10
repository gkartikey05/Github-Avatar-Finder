import Search from '../Search/Search'
import UserList from '../UserList/UserList'
import './User.css'

function User() {
  
  return (
    <div className='user-wrapper'>
      <Search />
      <UserList/>
    </div>
  )
}

export default User;