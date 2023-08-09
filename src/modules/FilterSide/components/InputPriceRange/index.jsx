import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Price, PriceRange, ButtonPriceFilter, FlexPrice } from "./styles";
import { useContext } from "react";
import { Context } from "../../../../utils/context";

const InputPriceRange = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const { filterProducts } = useContext(Context);
  return (
    <PriceRange>
      <Slider
        range
        min={0}
        max={1000}
        value={priceRange}
        onChange={setPriceRange}
        allowCross={false}
      />
      <FlexPrice>
        <Price>{`Price: ${priceRange[0]}$ - ${priceRange[1]}$`}</Price>
        <ButtonPriceFilter onClick={() => filterProducts(priceRange)}>
          Filter
        </ButtonPriceFilter>
      </FlexPrice>
    </PriceRange>
  );
};
export default InputPriceRange;
