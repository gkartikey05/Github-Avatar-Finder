import './UserProfile.css'

function UserProfile({name, image, id}) {
  return (
    <div className="user-profile">
      <div>
        <img className="user-image" src={image} alt={name} />
      </div>
      <div className="user-name">{name}</div>
      <span>View</span>
    </div>
  )
}

export default UserProfile;
