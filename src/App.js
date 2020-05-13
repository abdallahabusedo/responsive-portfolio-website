import React, {useState, useEffect, Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProjectDetails from './Pages/ProjectDetails';
import Welcome from './Pages/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ThemeMode:
        localStorage.getItem('theme') !== null
          ? localStorage.getItem('theme')
          : true,
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute(
      'data-theme',
      this.state.themeMode === true ? 'dark' : 'light'
    );
  }
  handleStoreTheme = () => {};
  handelThemeOnChange = () => {
    this.setState({themeMode: !this.state.themeMode});
    document.documentElement.setAttribute(
      'data-theme',
      this.state.themeMode === true ? 'dark' : 'light'
    );
    localStorage.setItem('theme', this.state.ThemeMode === true ? true : false);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <Welcome
              themeMode={this.state.themeMode}
              handelThemeOnChange={this.handelThemeOnChange}
            />
          </Route>
          <Route path="/projects">
            <ProjectDetails
              themeMode={this.state.themeMode}
              handelThemeOnChange={this.handelThemeOnChange}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
