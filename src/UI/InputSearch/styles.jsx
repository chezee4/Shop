import { styled } from "styled-components";

export const Search = styled.div`
  display: inline-block;
  position: relative;
  @media (max-width: 480px) {
   width:inherit;
  }
`;
export const ContainerIconSerach = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 0;
  left: 0;
  padding: 8px;
  background-color: transparent;
  pointer-events: none;
`;
export const Input = styled.input`
  padding-left: 35px;
  height: 35px;
  font-size: 15px;
  border: none;
  color: #070707;
  outline: none;
  width: 35px;
  transition: all ease 0.3s;
  background-color: #ffffff;
  border-radius: 50px;
  cursor: pointer;
  @media (max-width: 480px) {
    border-radius:0px;
    padding-right: 11px;
    width:100%;
  }
  @media (min-width: 480px) {
    &:focus {
      @media (max-width: 768px) {
        &:focus {
          width: 150px;
          padding-inline: 28px 10px;
        }
      }
      width: 230px;
      background: #f5f5f5;
      padding-inline: 35px 20px;
      cursor: text;
      + ${ContainerIconSerach} {
        pointer-events: all;
        cursor: pointer;
      }
    }
  }
`;
