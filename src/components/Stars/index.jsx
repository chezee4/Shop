import React, { useState } from "react";
import { StarsContainer,Label, Fastar } from "./styles";

const Stars = ({rate}) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(null);

  return (
    <StarsContainer>
      {[...Array(5)].map((star, index) => {
        let currentRating = index + 1;
        return (
          <Label key={currentRating}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <Fastar
              rating={rating}
              currentRating={currentRating}
              hover={hover}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </Label>
        );
      })}
    </StarsContainer>
  );
};

export default Stars;
