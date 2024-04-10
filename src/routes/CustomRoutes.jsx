import { Route, Routes } from 'react-router-dom' 
import User from '../components/User/User'
// import UserDetails from '../components/UserDetails/UserDetails'
function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      {/* <Route path="/profile" element={<UserDetails />} /> */}
    </Routes>
  )
}

export default CustomRoutes;