import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import rSquareLogo from "../../images/r-square-logo.jpg";

const ExampleNavbar = () => {
  return (
    <div className="example-navbar-container">
      <div className="tab-bar-wrapper">
        <div className="tab-bar-left">
          <div className="spacer">
            <div className="thin-spacer bottom-right-spacer" />
          </div>
          <div className="tab">
            <div className="left">
              <img className="favicon" src={rSquareLogo} alt="fav" />
              <div className="tab-text">RIVN</div>
            </div>
            <FontAwesomeIcon className="close-tab" icon="times" />
          </div>
          <div className="spacer">
            <div className="thin-spacer bottom-left-spacer" />
          </div>
          <div className="add-tab">
            <FontAwesomeIcon icon="plus" />
          </div>
        </div>
        <div className="tab-bar-right">
          <div>
            <FontAwesomeIcon icon="minus" />
          </div>
          <div>
            <FontAwesomeIcon icon="window-maximize" />
          </div>
          <div>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
      </div>
      <div className="search-bar-wrapper">
        <div className="left-of-search">
          {" "}
          <FontAwesomeIcon icon="arrow-left" />
          <FontAwesomeIcon icon="arrow-right" />
          <FontAwesomeIcon icon="redo" />
          <FontAwesomeIcon icon="home" />
        </div>
        <div className="search-bar">
          <FontAwesomeIcon icon="lock" />
          <div className="search-text">https://www.yoursite.com</div>
          <FontAwesomeIcon icon={["far", "star"]} />
        </div>
        <div className="right-of-search">
          <FontAwesomeIcon icon="ellipsis-v" />
        </div>
      </div>
    </div>
  );
};

export default ExampleNavbar;
