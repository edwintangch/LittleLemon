import './Nav.css';
import Logo from "./Assets/Logo.svg";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav grid">
            <div className="logo">
                <img src={Logo} alt="Little Lemon Logo"></img>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/aboutpage">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="orderonline">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
  }

export default Nav;