import { useParams } from 'react-router-dom'
import useUserDetails from '../../hooks/useUserDetails';
import './UserDetails.css'


function UserDetails({name}) {
  const {username} = useParams();
  const [userDetails] = useUserDetails(username, name);

  return (
    <div className="user-detail-wrapper">
      <div className="detail-wrapper">
        <img className="user-detail-image" src={userDetails.image} alt="" />
        <div className="user-detail-name">
          Name: <div className="style">{userDetails?.name}</div>
        </div>
        <div className="user-detail-name">
          User Name: <div className="style">{userDetails.login}</div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
