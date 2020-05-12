import React, {Component} from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Massage: '',
    };
  }

  render() {
    return (
      <div className="ContantSec" id="contact">
        <form
          className="FormSec container"
          action="mailto:abozoooz2014.aa@gmail.com"
        >
          <div>
            <p className="ContText">Contact Me</p>
            <p className="ContsText">Name</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="Forminp"
            ></input>
            <p className="ContsText">Email</p>
            <input
              type="email"
              className="Forminp"
              placeholder="Enter your Email"
            ></input>
            <p className="ContsText">Massage</p>
            <textarea
              type="text"
              className="Forminp"
              placeholder="Enter your Massage"
            ></textarea>

            <button type="submit" class="btn" >
              Send Massage
            </button>
            <div className="SocialIcons"></div>
          </div>
        </form>
      </div>
    );
  }
}
