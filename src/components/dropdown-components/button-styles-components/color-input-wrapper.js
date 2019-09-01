import React from "react";

import InputColor from "react-input-color";
// import { cpus } from "os";

const ColorInputWrapper = props => {
  let color = props.color.hex;

  return (
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
  );
};

export default ColorInputWrapper;
