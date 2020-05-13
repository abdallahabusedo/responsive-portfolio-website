import React, {Component} from 'react';
import Navbar from './../Component/Navbar';
import Projects from './../Component/ProjectDe';
export default class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <Navbar
          themeMode={this.props.themeMode}
          handelThemeOnChange={this.props.handelThemeOnChange}
        />
        <Projects />
      </div>
    );
  }
}
