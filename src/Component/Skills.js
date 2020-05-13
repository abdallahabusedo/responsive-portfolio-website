import React, {Component} from 'react';
import Web from './../assets/Images/web.png';
import GameDev from './../assets/Images/game-development.png';
import Arduino from './../assets/Images/flat.png';
import './Welcome.css';
export default class Skills extends Component {
  render() {
    return (
      <div className="SkillsBk">
        <div className="container ">
          <p className="MP"> Skills</p>
          <div className="row container APic ">
            <div className="column">
              <div className="card">
                <img src={Web} alt="" className="card-img-top"></img>
                <div className="card-body">
                  <h5>Front-End</h5>
                  <hr />
                  <p className="skiTit">Languages that i speak</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link card-text"> JS</li>
                    <li className="nav-link card-text"> React</li>
                    <li className="nav-link card-text"> Axios</li>
                  </ul>
                  <p className="skiTit">Where i make my beautiful websites</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link">visual Studio Code</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={GameDev} alt="" className="card-img-top"></img>
                <div className="card-body">
                  <h5>Games development</h5>
                  <hr />
                  <p className="skiTit">I love to play with this codes</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link card-text"> C++</li>
                    <li className="nav-link card-text"> C#</li>
                  </ul>
                  <p className="skiTit"> My Playground</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link card-text"> unity </li>
                    <li className="nav-link card-text"> blender</li>
                    <li className="nav-link card-text"> visual Studio </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={Arduino} alt="" className="card-img-top"></img>{' '}
                <div className="card-body">
                  <h5>Robotics</h5>
                  <hr />
                  <p className="skiTit">How about to create a new Robot</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link"> C</li>
                  </ul>
                  <p className="skiTit">Tools that can Fix the Robots</p>
                  <ul style={{color: 'black'}}>
                    <li className="nav-link"> Arduino</li>
                    <li className="nav-link"> SmuliDE </li>
                    <li className="nav-link"> Logsim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
