import React, {Component} from 'react';
import Logo from './../assets/Images/Logo.png';
import './Welcome.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Nave">
        <nav className="navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              width="70"
              height="55"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item EPages">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item EPages">
                <a className="nav-link" href="/Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item EPages">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
      
    );
  }
}
export default Navbar;
