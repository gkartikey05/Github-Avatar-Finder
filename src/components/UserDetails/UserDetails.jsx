import { Link, useParams } from 'react-router-dom'
import useUserDetails from '../../hooks/useUserDetails';
import './UserDetails.css'


function UserDetails({name}) {
  const {username} = useParams();
  const [userDetails] = useUserDetails(username, name);

  return (
    <div className="user-detail-wrapper">
      <div className="detail-wrapper">
        <img className="user-detail-image" src={userDetails.image} alt="" />
        <div className='details'>
          <h1 className="user-detail-name">
            {userDetails.name ? userDetails.name : 'Username missing!'}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Login_Name</span> : {userDetails.login}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Followers</span> : {userDetails.followers}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Following</span> : {userDetails.following}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Public_Repos</span> : {userDetails.public_repos}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Location</span> : {userDetails.location}
          </h1>
          <h1 className="user-detail-extra">
            <span id="style">Join</span> : {new Date(userDetails.created_at).toLocaleDateString()}
          </h1>
          <a href={userDetails.html_url} target='_blank' id='visit'>Visit</a>
        </div>
      </div>
      <button id='back'>
        <Link to={'/'}>Back</Link>
      </button>
    </div>
  );
}

export default UserDetails;
