import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'


//pages/components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed';
import About from './pages/About'
import css from '../src/index.css'


function App() {
  const {user}=useAuthContext()

  return (
    <div className="App ">

      <BrowserRouter>
   
      <Navbar/>
      <div className='  pages  '>
        <Routes>
        <Route 
              path="/"
              element={user? <Home />: <Navigate to='/login'/>}
            />
             <Route 
              exact path="/login"
              element={!user? <Login />: <Navigate to="/"/>}
            />
            <Route 
              path="/signup"
              element={!user? <Signup/>: <Navigate to='/'/> }
            />
            <Route
              path="/feed"
              element={<Feed/>}
            />
             <Route 
              path="/about"
              element={<About/> }
            />
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
