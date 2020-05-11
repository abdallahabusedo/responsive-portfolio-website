import React, {Component} from 'react';
import Logo from './../assets/Images/Logo.png';
import './Welcome.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Nave">
        <nav className="navbar navbar-expand-lg fixed-top">
          <a className="navbar-brand Logo" href="/">
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
          <div className="collapse navbar-collapse RightCon row" id="navbarNav">
            <ul className="row ">
              <div className="column EPages">
                <a className="nav-link nav-links" href="/About">
                  Home
                </a>
              </div>
              <div className="column EPages">
                <a className="nav-link nav-links" href="/Projects">
                  Projects
                </a>
              </div>
              <div className="column EPages">
                <a className="nav-link nav-links" href="/Contact">
                  Contact
                </a>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
