import React, { Component } from 'react';

class FooterCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="footer">
            © 1999-2018 Neopets, Inc.
          </div>
          <div className="footer">
            <a href="http://www.neopets.com/aboutus.phtml">
              About
            </a>
            {} | {}
            <a href="http://www.neopets.com/help.phtml">
              Help
            </a>
            {} | {}
            <a href="http://www.neopets.com/terms.phtml">
              Terms
            </a>
            {} | {}
            <a href="http://www.neopets.com/privacy.phtml">
              Privacy policy
            </a>
            {} | {}
            <a href="http://www.neopets.com/safetytips.phtml">
              Safety tips
            </a>
            {} | {}
            <a href="http://www.neopets.com/contact.phtml">
              Contact us
            </a>
            {} | {}
            <a href="http://www.neopets.com/refer/index.phtml">
              Referral program
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterCard;
