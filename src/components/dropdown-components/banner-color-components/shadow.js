import React from "react";

import Draggable from "react-draggable";

const Shadow = props => {
  const horizontalDragHandler = (e, ui) => {
    let movement = ui.deltaX;
    props.setShadowHorizontal(props.shadowHorizontal + movement);
  };
  const verticleDragHandler = (e, ui) => {
    let movement = ui.deltaY;
    props.setShadowVerticle(props.shadowVerticle + movement);
  };

  console.log(props.shadowHorizontal);
  console.log(props.shadowVerticle);

  return (
    <div className="banner-color-component">
      <div className="banner-color-title">Shadow</div>
      <div className="shadow-options-wrapper">
        <div className="shadow-option position-wrapper">
          <div className="shadow-option-title">Position</div>
          <div className="horizontal-draggable-wrapper draggable-wrapper">
            <Draggable
              defaultPosition={{ x: props.shadowHorizontal, y: 0 }}
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
              defaultPosition={{ x: 0, y: props.shadowVerticle }}
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
            onChange={event => props.setShadowBlur(event.target.value)}
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
            onChange={event => props.setShadowSize(event.target.value)}
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
