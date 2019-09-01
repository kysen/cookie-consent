import React from "react";

import InputColor from "react-input-color";

const BackgroundTextColor = props => {
  let color = `${props.color.hex}`;

  return (
    <div className="banner-color-component">
      <div className="banner-color-title ">{props.title}</div>
      <div className="color-input-wrapper">
        <div className="color-input-field">
          <input
            maxLength="9"
            spellCheck="false"
            type="text"
            value={props.color.hex}
            onChange={e => props.setColor({ hex: e.target.value })}
          />
        </div>
        <InputColor
          className="color-changer"
          onChange={props.setColor}
          initialHexColor={color}
          placement="right"
        />
      </div>
    </div>
  );
};

export default BackgroundTextColor;
