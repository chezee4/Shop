import { styled } from "styled-components";

export const PriceRange = styled.div`
  max-width: 220px;
`;
export const Price = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 157.143%;
  color: #707070;
`;
export const FlexPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonPriceFilter = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 157.143%;
  padding:15px 10px;
  background-color:transparent;
  color:#A18A68;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    color:#ffb84e;
  }
`;
