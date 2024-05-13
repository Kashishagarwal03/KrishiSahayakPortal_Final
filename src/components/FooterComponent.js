import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div className="footer" style={{ height: '50px', overflow: 'hidden' }}>
      <marquee scrollamount="4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>KRISHI SAHAYK PORTAL - One Platform for all farmers</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2020 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </marquee>
    </div>
  );
}

export default Footer;
