import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout}=useLogout()
  const {user}=useAuthContext()

  const handleCLick=()=>{
    logout()
  }

  return (
    <header className="bg-black p-4">
      <div>
        <div className="flex items-center justify-between">

        <Link  to="/">
          <button class="text-4xl rounded-none bg-white hover:bg-gray-200 text-black">Workout Buddy</button>
        </Link>
        <nav>
          {user &&( 
          <div class="flex space-x-4">
            <span class="rounded-none px-1 bg-white hover:bg-gray-200 text-black">{user.email}</span>
            <button class="rounded-none px-1 bg-white hover:bg-gray-200 text-black" onClick={handleCLick}>Log out </button>
            <Link class="rounded-none px-1 bg-red-700 hover:bg-gray-200 text-black" to="/feed">Feed</Link>
          </div>
          )}

          {!user &&(
          <div >
            <Link class="rounded-none bg-white hover:bg-gray-200 text-black"  to="/login">Login</Link>
            <Link class="rounded-none bg-white hover:bg-gray-200 text-black" to="/signup">Sign up</Link>
          </div>
          )}
          
        </nav>
      </div>
      </div>
    </header>
  )
}

export default Navbar