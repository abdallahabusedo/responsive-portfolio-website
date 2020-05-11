import React, {Component} from 'react';
import Navbar from './../Component/Navbar';
import MyPhoto from './../Component/MyPhoto';
import IntroduceMySelf from './../Component/IntroduceMySelf';
export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MyPhoto clasName="" />
        <IntroduceMySelf />
      </div>
    );
  }
}
