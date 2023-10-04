// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        className="logo"
        alt="website logo"
      />
      <div className="menu-container">
        <ul className="menu" type="none">
          <Link to="/" className="nav-link">
            <li className="menu-item">Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li className="menu-item">Products</li>
          </Link>
          <Link to="/Cart" className="nav-link">
            <li className="menu-item">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logoutBtn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)
export default Header
