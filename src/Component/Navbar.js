import React, {Component} from 'react';
import Logo from './../assets/Images/Logo.png';
import './Welcome.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Var: 'main',
    };
  }
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
            className="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{fontSize: '50px'}}
          >
            =
          </button>

          <div className="collapse navbar-collapse RightCon" id="navbarNav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
            <ul className="row ">
              <div className="column EPages">
                <a className="nav-link nav-links" href="/#about">
                  Home
                </a>
              </div>
              <div className="column EPages">
                <a className="nav-link nav-links" href="/#projects">
                  Projects
                </a>
              </div>
              <div className="column EPages">
                <a className="nav-link nav-links" href="/#contact">
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
