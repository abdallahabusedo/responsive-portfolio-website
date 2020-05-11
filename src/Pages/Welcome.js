import React, {Component} from 'react';
import Navbar from './../Component/Navbar';
import MyPhoto from './../Component/MyPhoto';
import IntroduceMySelf from './../Component/IntroduceMySelf';
import Skills from '../Component/Skills';
export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MyPhoto />
        <IntroduceMySelf />
        <Skills />
      </div>
    );
  }
}
