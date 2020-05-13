import React, {Component} from 'react';
import My from './../assets/Images/Whw.jpeg';
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
      <div className="container">
        <div className="ContantSec" id="contact">
          <form
            className="divSec container"
            action="mailto:abozoooz2014.aa@gmail.com"
          >
            <div>
              <p className="ContText container SecText ">Contact Me</p>
              <p className=" container SecText">I would love to talk to you </p>
              <p className=" container SecText">so just send me a Massage</p>
              <button type="submit" class="btn">
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
