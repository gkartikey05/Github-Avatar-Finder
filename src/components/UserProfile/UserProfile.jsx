import { Link } from 'react-router-dom';
import './UserProfile.css'

function UserProfile({name, image, login}) {
  return (
    <div className="user-profile">
      <Link to={`/${login}`}>
        <div>
          <img className="user-image" src={image} alt={name} />
        </div>
        <div className="user-name">{name}</div>
        <button id='view'>View</button>
      </Link>
    </div>
  )
}

export default UserProfile;
