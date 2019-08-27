import React from "react";

import Draggable from "react-draggable";

const Shadow = props => {
  // const [shadowVerticlePosition, setShadowVerticlePostition] = React.useState(
  //   0
  // );
  // const [
  //   shadowHorizontalPosition,
  //   setShadowHorizontalPostition
  // ] = React.useState(0);

  const horizontalDragHandler = (e, ui) => {
    let movement = ui.deltaX / 5;
    props.setShadowVerticlePostition(props.shadowVerticlePosition + movement);
  };
  const verticleDragHandler = (e, ui) => {
    let movement = ui.deltaY / 5;
    props.setShadowHorizontalPostition(
      props.shadowHorizontalPosition + movement
    );
  };

  return (
    <div className="banner-color-component">
      <div className="banner-color-title">Shadow</div>
      <div className="shadow-options-wrapper">
        <div className="shadow-option position-wrapper">
          <div className="shadow-option-title">Position</div>
          <div className="horizontal-draggable-wrapper draggable-wrapper">
            <Draggable
              bounds={{ left: -40, right: 40 }}
              axis="x"
              grid={[5, 5]}
              onDrag={(e, ui) => {
                horizontalDragHandler(e, ui);
              }}
            >
              <div className="draggable-circle" />
            </Draggable>
          </div>
          <div className="verticle-draggable-wrapper draggable-wrapper">
            <Draggable
              bounds={{ top: -40, bottom: 40 }}
              axis="y"
              grid={[5, 5]}
              onDrag={(e, ui) => {
                verticleDragHandler(e, ui);
              }}
            >
              <div className="draggable-circle" />
            </Draggable>
          </div>
        </div>
        <div className="shadow-option">
          <div className="shadow-option-title">Blur Effect</div>

          <select
            name="blur"
            value={props.shadowBlurChosen}
            onChange={event => props.handleBlurSelection(event.target.value)}
            className="shadow-option-select"
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div className="shadow-option">
          <div className="shadow-option-title">Shadow Size</div>

          <select
            name="size"
            value={props.shadowSizeChosen}
            onChange={event => props.handleSizeSelection(event.target.value)}
            className="shadow-option-select"
          >
            <option value="small">small</option>
            <option value="match banner">match banner</option>
            <option value="large">large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shadow;
