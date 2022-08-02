import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/';


export const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogout = () => {

    logout()
    
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

      <Link
        className="navbar-brand"
        to="/my-notes"
      >
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `text-nowrap nav-item nav-link ${isActive ? 'active': ''}`}
            to="/my-notes"
          >
            My notes
          </NavLink>

          <NavLink
            className={({ isActive }) => `text-nowrap nav-item nav-link ${isActive ? 'active': ''}`}
            to="/archived-notes"
          >
            Archived Notes
          </NavLink>

        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">

          <span className='nav-item nav-link text-info'>
            {user?.name}
          </span>

          <button className='nav-item nav-link btn' onClick={onLogout}>Logout</button>
          {/* <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active': ''}`}
            to="/login"
          >
            Logout
          </NavLink> */}
        </ul>
      </div>
    </nav>
  )
}