import { styled } from "styled-components";

export const Icon = styled.img`
  width:100%;
  height:100%;
  filter: invert(1);
  cursor: pointer;
  transition:all 0.3s linear;
  &:hover{
    filter:hue-rotate(1);
  }
`;