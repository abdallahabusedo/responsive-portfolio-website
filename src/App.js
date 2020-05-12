import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProjectDetails from './Pages/ProjectDetails';
import Welcome from './Pages/Welcome';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/projects">
          <ProjectDetails />
        </Route>
      </div>
    </Router>
  );
}

export default App;
