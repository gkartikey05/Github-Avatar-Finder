import CustomRoutes from './routes/CustomRoutes';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="finder-app">
      <h1 className='heading'>
        <Link to="/">GitHub User Finder</Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App;