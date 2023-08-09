import { styled } from "styled-components";

export const PriceRange = styled.div`
  max-width: 220px;
`;
export const Price = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 157.143%;
  color: #fbfad3;

`;
export const FlexPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonPriceFilter = styled.button`
  font-size: 17px;
  font-weight: 400;
  line-height: 157.143%;
  padding:15px 10px;
  background-color:transparent;
  color: #c0bc5a;

  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    color:#cea51c;
  }
`;
