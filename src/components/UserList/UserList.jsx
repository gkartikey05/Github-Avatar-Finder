import UserProfile from '../UserProfile/UserProfile';
import useUserList from '../../hooks/useUserList';
import './UserList.css'


function UserList() {
  const [userListState] = useUserList();
  
  return (
    <div className="user-list-wrapper">
      <div className="user-list">
        {userListState.isLoading
          ? ": Data Downloading..."
          : userListState.userList.map((u) => (
              <UserProfile
                name={u.name}
                image={u.image}
                key={u.id}
                login={u.name}
              />
            ))}
      </div>
    </div>
  );
}

export default UserList;