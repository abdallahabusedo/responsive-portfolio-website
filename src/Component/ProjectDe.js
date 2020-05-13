import React, {Component} from 'react';
import qs from 'qs';
import {withRouter, Redirect} from 'react-router-dom';
import {info} from './DataOfProjects';
import './Welcome.css';
import Git from './../assets/Images/D.png';

class ProjectDe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).id,
      projects: {},
      loaded: false,
    };
  }
  componentDidMount() {
    this.setState({projects: info[this.state.id], loaded: true});
    console.log('handleStore is Called');
  }
  handleStoreProjects = () => {};
  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.projects !== this.state.projects) {
      this.setState({loaded: true});
    }
  }

  render() {
    console.log('Projects', this.state.projects);
    if (this.state.id > info.length) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {this.state.loaded ? (
          <div>
            <div className="container">
              <img
                src={this.state.projects.img}
                alt=""
                className="projectLogo"
              />
              <div className="ProjectName">{this.state.projects.name}</div>
              <div className="ProjectDis">{this.state.projects.disc}</div>{' '}
              <img
                src={this.state.projects.imgt}
                alt=""
                className="projectLogo"
              />
            </div>
            <img src={this.state.projects.gif} alt="" className="gif"></img>
            <div className="container">
              <div className="ProjectDis">To see the project in the repo</div>
              <a href={this.state.projects.href} className="LinkGit">
                <img src={Git} className="GitIco" alt=""></img>
              </a>
            </div>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </>
    );
  }
}
export default withRouter(ProjectDe);
