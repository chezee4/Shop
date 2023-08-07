import { styled } from "styled-components";

export const BurgerContainer = styled.button`
 @media (max-width:768px){
  display:flex;
 }
 
  position: relative;
  display: none;
  justify-content:center;
  align-items:center;
  margin-left:auto;
  background-color: transparent;
  padding-block: 17px;
  cursor: pointer;
`;
export const Line = styled.span`
  display: inline-block;
  background-color: black;
  width: 20px;
  height: 2px;
  &::before{
    content: "";
    position:absolute;
    top:9px;
    left:0;
    height: 2px;
    width:20px;
    background: #000000;
  }
  &::after{
    content: "";
    position:absolute;
    bottom:9px;
    left:0;
    height: 2px;
    width:20px;
    background: #000000;
  }
`;
