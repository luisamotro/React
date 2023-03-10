import React, { Component } from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

class Footer extends Component {
  render() {
    return (
      <div>
        <MDBFooter bgColor="light" className="text-center text-lg-left">
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            {new Date().getFullYear()} Copyright:{" "}
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Footer;
