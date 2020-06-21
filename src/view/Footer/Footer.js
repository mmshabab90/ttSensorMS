import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer grey lighten-3 z-depth-1">
      <div className="footer-copyright">
        <div className="container black-text">
          <span className="flow-text">
            © {new Date().getFullYear()} || Property of
          </span>
          <span style={{ paddingLeft: "15px" }}>
            <a href="https://enry.com/" className="green-text">
              <u>Enry</u>
            </a>
          </span>
          <span className="right">
            Designed and coded by:
            <span style={{ paddingLeft: "15px" }}>
              <a
                className="deep-orange-text text-accent-2"
                href="https://mmshabab90.github.io/my-profile/"
              >
                <u>Meeyad Shabab</u>
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
