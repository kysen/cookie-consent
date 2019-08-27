import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LayoutFrame from "./layout-components/layout-frame";
import BarStyle from "./layout-components/layout-bar-style";

// import rSquareLogo from "../../images/r-square-logo.jpg";

const Layout = props => {
  // const [layoutChosen, handleLayoutClick] = React.useState("top");

  return (
    <div className="dropdown-wrapper">
      <div
        className={`dropdown-title ${
          props.activeComponent === "layout" ? "dropdown-title-active" : ""
        }`}
        onClick={() => props.changeActiveComponent("layout")}
      >
        Layout
      </div>

      <div
        className="layout-options-container"
        style={
          props.activeComponent === "layout"
            ? { height: "auto" }
            : { height: "0px", visibility: "hidden" }
        }
      >
        <div className="layout-options-wrapper">
          <div
            className={`layout-item-wrapper ${
              props.layoutChosen === "top" ? "layout-item-wrapper-active" : ""
            }`}
            onClick={() => props.handleLayoutClick("top")}
          >
            <div className="layout-frame-wrapper">
              <BarStyle />
              <LayoutFrame />
            </div>
            <div className={`layout-item-title`}>Top Layout</div>
          </div>
          <div
            className={`layout-item-wrapper ${
              props.layoutChosen === "bottom"
                ? "layout-item-wrapper-active"
                : ""
            }`}
            onClick={() => props.handleLayoutClick("bottom")}
          >
            <div className="layout-frame-wrapper">
              <LayoutFrame />
              <BarStyle />
            </div>{" "}
            <div className={`layout-item-title`}>{"Bottom Layout"}</div>
          </div>
          <div
            className={`layout-item-wrapper ${
              props.layoutChosen === "side" ? "layout-item-wrapper-active" : ""
            }`}
            onClick={() => props.handleLayoutClick("side")}
          >
            <div className="layout-frame-wrapper">
              <div className="side-popup-container">
                <div className="side-popup-wrapper">
                  <div className="side-popup-text-wrapper">
                    <div className="side-popup-text shortened" />
                    <div className="side-popup-text" />
                    <div className="side-popup-text shortened" />
                  </div>
                  <div className="side-popup-button-wrapper">
                    <div className="side-popup-button" />
                    <div className="side-popup-button" />
                  </div>
                </div>
              </div>
              <LayoutFrame />
            </div>{" "}
            <div className="layout-item-title">{"Side Pop-up"}</div>
          </div>
          <div
            className={`layout-item-wrapper ${
              props.layoutChosen === "alert" ? "layout-item-wrapper-active" : ""
            }`}
            onClick={() => props.handleLayoutClick("alert")}
          >
            <div className="layout-frame-wrapper">
              <div className="alert-style-container">
                <div className="alert-wrapper">
                  <div className="alert-text">
                    <div />
                    <div />
                    <div className="alert-button" />
                  </div>
                  <FontAwesomeIcon className="close-button" icon="times" />
                </div>
              </div>
              <LayoutFrame />
            </div>{" "}
            <div className={`layout-item-title`}>{"Alert"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
