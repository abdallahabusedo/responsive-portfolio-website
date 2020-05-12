import React, {Component} from 'react';
import Profile from './../assets/Images/W.jpeg';
import './Welcome.css';

export default class MyPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="MainText">A Front-End Developer</div>
        <div className="SecText containerMOD">
          Four months ago, I started learning Web Development
          , I Love to design a
          good websites and love to learn more every day It.
        </div>
        <div>
          <div class="outer-div container">
            <div class="inner-div">
              <img src={Profile} className="Profile" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
