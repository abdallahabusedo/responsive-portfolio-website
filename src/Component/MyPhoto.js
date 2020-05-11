import React, {Component} from 'react';
import Back from './../assets/Images/p.png';
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
        <div className="SecText">
          I Love to design a good websites and love to learn more every day{' '}
        </div>
        <div className="PHO">
          <img src={Profile} className="Profile" alt=""></img>
        </div>
      </div>
    );
  }
}
