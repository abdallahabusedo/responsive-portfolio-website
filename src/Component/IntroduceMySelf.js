import React, {Component} from 'react';
import './Welcome.css';
import Pic1 from './../assets/Images/Wh.jpeg';
export default class IntroduceMySelf extends Component {
  render() {
    return (
      <div className="IntSection ">
        <div className=" container">
          <p className="MyName">My Name is Abdallah Abu Sedo</p>
          <p className=" container MyBio">
            I start my journey at my college as a computer engineer in Cairo
            university
          </p>
          <p className=" container MyBio">
            I spend a good time learning and trying to know everything about
            anything I start so I love to learn and enjoy it
          </p>
          <div class="outer-div container">
            <div class="inner-div">
              <img className="Pic" src={Pic1} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
