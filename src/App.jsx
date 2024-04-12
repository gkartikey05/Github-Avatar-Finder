import CustomRoutes from './routes/CustomRoutes';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="finder-app">
      <h1>
        <Link to="/">GitHub Avatar Finder</Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App;