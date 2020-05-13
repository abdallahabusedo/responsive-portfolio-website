import React, {Component} from 'react';
import Oud from './../assets/Images/oud.png';
import './Welcome.css';
import Cluc from './../assets/Images/calculator.png';
import Space from './../assets/Images/Space.png';
import PacMan from './../assets/Images/pacman (2).png';

import {Link} from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div className="ProjectSec" id="projects">
        <p className="MP">My Projects</p>
        <div class="grid-container container">
          <Link to={`/projects/?id=${0}`}>
            <div class="grid-item">
              <div className="container ProjSec">
                <div>
                  <img src={Oud} alt="" className="OudLogo"></img>
                </div>
                Oud
               
              </div>
            </div>
          </Link>
          <Link to={`/projects/?id=${1}`}>
            <div class="grid-item">
              <div className="container ProjSec">
                <div>
                  <img src={Cluc} alt="" className="OudLogo"></img>
                </div>
              </div>
              calculator
           
            </div>
          </Link>
          <Link to={`/projects/?id=${2}`}>
            <div class="grid-item">
              <div className="container ProjSec">
                <div>
                  <img src={Space} alt="" className="OudLogo"></img>
                </div>
              </div>
              Sky invaders
          
            </div>
          </Link>
          <Link to={`/projects/?id=${3}`}>
            <div class="grid-item">
              <div className="container ProjSec">
                <div>
                  <img src={PacMan} alt="" className="OudLogo "></img>
                </div>
                <p className="OudDis container"></p>
              </div>
              Pacman
          
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
