import { styled } from "styled-components";

export const ProductContainer = styled.div`
  min-height:200px;
  cursor: pointer;
  transition:all 0.4s linear;
  &:hover{
    transform:translateY(-5px);
  }
  
`;
export const TitleProduct = styled.h4`
    font-size: 20px;
    width: 300px;
    word-break: break-word;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 130%;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height:  130% ;
  text-transform: capitalize;
`;
