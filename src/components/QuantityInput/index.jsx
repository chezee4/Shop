import React from "react";

import { CurrentButton, CurrentInput, CurrentProduct } from "./styles";
const QuantityInput = ({ setValue, value, changeCurrent }) => {
  const toggle = (point) => {
    if (point === "-" && value > 1) {
      setValue((value) => value - 1);
    }
    if (point === "+" && value < 15) {
      setValue((value) => value + 1);
    }
  };
  return (
    <CurrentProduct>
      <CurrentButton onClick={(e) => toggle(e.currentTarget.textContent)}>
        -
      </CurrentButton>
      <CurrentInput
        type="number"
        value={value}
        onChange={(e) => {setValue(e.target.value); changeCurrent(value)}}
        min={1}
        max={15}
        readOnly
      />
      <CurrentButton
        type="button"
        onClick={(e) => toggle(e.currentTarget.textContent)}
      >
        +
      </CurrentButton>
    </CurrentProduct>
  );
};

export default QuantityInput;
