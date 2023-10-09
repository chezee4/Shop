import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const StarsContainer = styled.div`
  display: flex;
  gap: 10px;
  &,
  & * {
    cursor: pointer;
  }
`;

export const Label = styled.label``;

export const Fastar = styled(FaStar)`
  transition: all 0.15s linear;
  color:#e9d6ae;
  font-size: 30px;
  color: ${(props) =>
    props.currentRating <= props.rating
      ? "#ffc307"
      : props.currentRating <= props.hover
      ? "#c2ac6b"
      : null};
`;
