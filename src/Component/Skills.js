import React, {Component} from 'react';
import Web from './../assets/Images/web.png';
import GameDev from './../assets/Images/game-development.png';
import Arduino from './../assets/Images/flat.png';
export default class Skills extends Component {
  render() {
    return (
      <div className="SkillsBk">
        <div className="container ">
          <div className="row container APic ">
            <div className="column">
              <div className="card">
                <img src={Web} alt=""></img>
                <hr />
                <h5>Front-End</h5>
                <ul>
                  <li className="nav-link"> JS</li>
                  <li className="nav-link"> React</li>
                  <li className="nav-link"> Axios</li>
                  <li className="nav-link"> jest</li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={GameDev} alt=""></img>
                <hr />
                <h5>Games development</h5>
                <ul>
                  <li className="nav-link"> C++</li>
                  <li className="nav-link"> C#</li>
                  <li className="nav-link"> unity </li>
                  <li className="nav-link"> blender</li>
                </ul>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={Arduino} alt=""></img>
                <hr />
                <h5>Robotics</h5>
                <ul>
                  <li className="nav-link"> C</li>
                  <li className="nav-link"> Arduino</li>
                  <li className="nav-link"> SmuliDE </li>
                  <li className="nav-link"> Logsim</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
