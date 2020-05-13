import React, {Component} from 'react';
import Facebook from './../assets/Images/facebook.png';
import github from './../assets/Images/GitHub.jpg';
import insta from './../assets/Images/insta.png';
export default class SoicalIcons extends Component {
  render() {
    return (
      <div>
        <div className="socialIcons container">
          <a href="https://www.facebook.com/abdallah.abusedo">
            <img src={Facebook} alt="" className="SI"></img>
          </a>
          <a href="https://github.com/abdallahabusedo">
            <img src={github} alt="" className="SI"></img>
          </a>
          <a href="https://www.instagram.com/abdallah_abusedo/">
            <img src={insta} alt="" className="SI"></img>
          </a>
        </div>
      </div>
    );
  }
}
