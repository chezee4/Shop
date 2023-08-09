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
  height: 35px;
  font-size: 15px;
  border-bottom: 1px solid #D8D8D8;
  color: #070707;
  outline: none;
  width: 100%;
  transition: all ease 0.3s;
  background-color: #fffcf9;
  cursor: pointer;
`;
