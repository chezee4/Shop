import styled from "styled-components";

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  border-right: 1px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 17px;
    background: #707070;
  }
  @media (min-width: 480px) and (max-width: 768px) {
     flex-direction: column;
      position: fixed;
      z-index: 999;
      top: 52px;
      right: ${(props) => props.burgerActive ? "0" : "-100%"};
      color: wheat;
      width: 12em;
      height: 100%;
      transition: all 0.5s ease;
      background-color: rgb(40 38 31);
 }
 @media (max-width: 480px){
      flex-direction: column;
      color: wheat;
      width:100%;
      transition: all 0.5s ease;
      background-color: rgb(40 38 31);
 }
    

`;
export const NavItem = styled.li`
  position: relative;
  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 168.75%;
  transition: all 0.2s linear;
  cursor: pointer;
  &:not(:last-child){
    margin-right: 50px;
  }
  &:last-child{
    margin-right:30px;
  }
  @media (max-width:768px){
    &:nth-child(n){
        width:100%;
        text-align:center;
        padding-block:15px;
        margin:0;
        transition: all 0.3s;
       &:hover{
        background:#828282;
       }
    }
    &::before{
        visibility:hidden;
    }
}
  &::before {
    content: "";
    position: absolute;
    top: 38px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    background: #e8ce78;
    transition: all 0.2s linear;
    width: 0;
    height: 2px;
  }
  &:hover{
    color: #e8ce78;

   &::before {
    width: 40px;
  }
  }
    
`;
