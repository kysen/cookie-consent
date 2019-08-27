import React, { useState } from "react";

import InputColor from "react-input-color";

const BackgroundTextColor = props => {
  const [initial, setInitial] = useState(props.initial);
  // const [color, setColor] = useState({});

  let color = props.color;

  console.log(color.hex);

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
        <InputColor
          className="color-changer"
          onChange={props.setColor}
          initialHexColor={initial}
          placement="right"
        />
      </div>
    </div>
  );
};

export default BackgroundTextColor;
