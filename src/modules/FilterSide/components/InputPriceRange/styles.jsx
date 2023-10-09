import { styled } from "styled-components";

export const PriceRange = styled.div`
  max-width: 220px;
`;
export const Price = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 157.143%;
  color: #000000;

`;
export const FlexPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:20px;
`;
export const ButtonPriceFilter = styled.button`
      font-size: 17px;
    font-weight: 400;
    line-height: 157.143%;
    padding: 1px 10px;
    background-color: #d17a00;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s linear;

  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    background-color: #e4921e;
  }
`;
