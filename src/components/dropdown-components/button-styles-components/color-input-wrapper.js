import React, { useState } from "react";

import InputColor from "react-input-color";

const ColorInputWrapper = props => {
  const [initial, setInitial] = useState(props.initial);

  let color = props.color;

  return (
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
  );
};

export default ColorInputWrapper;
