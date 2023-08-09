import { styled } from "styled-components";

export const Search = styled.div`
  display: inline-block;
  position: relative;
 max-width:220px;
 margin-bottom:40px;
`;
export const ContainerIconSerach = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 0;
  right: 0;
  padding: 8px;
   transition: all 0.25s linear;
   &:hover{
    transform:translateY(-2px);
   }
  background-color: transparent;
`;
export const Input = styled.input`
    font-size: 16px;
    border-bottom: 1px solid #ffffff;
    color: #fbfae6;
    outline: none;
    padding: 10px 0px 10px 0px;
    padding-inline: 10px 31px;
    width: 100%;
    transition: all ease 0.3s;
    background-color: transparent;
    box-shadow: 0px 0px 0.5px 0px #000;
    cursor: pointer;
    &::placeholder{
      color: #bdbcad;
    }
`;
