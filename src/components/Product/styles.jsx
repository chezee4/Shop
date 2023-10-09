import { styled } from "styled-components";

export const ProductContainer = styled.div`
  cursor: pointer;
  background-color: #202020;
  border: 1px solid #202020;
  color:#ffffff;
  transition:all 0.25s linear;
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

export const Text = styled.div`
  padding: 10px 0px 30px 10px;
`;
