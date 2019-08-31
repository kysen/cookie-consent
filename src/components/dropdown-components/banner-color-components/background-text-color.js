import React, { useState } from "react";

import InputColor from "react-input-color";

const BackgroundTextColor = props => {
  const [initial, setInitial] = useState(props.initial);

  const [prac, setPrac] = useState("");
  console.log(prac);

  let color = props.color;

  return (
    <div className="banner-color-component">
      <div className="banner-color-title">{props.title}</div>
      <div className="color-input-wrapper">
        <div className="color-input-field">
          <input
            type="text"
            value={color.hex}
            onChange={e => setInitial(e.target.value)}
          />
        </div>
        <input
          type="color"
          className="color-changer"
          value={prac}
          onChange={e => setPrac(e.target.value)}
        />
        {/* <InputColor
          className="color-changer"
          onChange={props.setColor}
          initialHexColor={initial}
          placement="right"
        /> */}
      </div>
    </div>
  );
};

export default BackgroundTextColor;
