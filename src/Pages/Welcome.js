import React, {Component} from 'react';
import Navbar from './../Component/Navbar';
import MyPhoto from './../Component/MyPhoto';
import IntroduceMySelf from './../Component/IntroduceMySelf';
import Skills from '../Component/Skills';
import Projects from './../Component/Projects';
import Contact from './../Component/Contact';
import SoicalIcons from './../Component/SoicalIcons';
export default class Welcome extends Component {
  render() {
    return (
      <div>
        <Navbar
          themeMode={this.props.themeMode}
          handelThemeOnChange={this.props.handelThemeOnChange}
        />
        <MyPhoto />
        <IntroduceMySelf />
        <Skills />
        <Projects />
        <Contact />
        <SoicalIcons />
      </div>
    );
  }
}
