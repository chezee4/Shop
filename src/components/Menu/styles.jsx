import { styled } from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  align-items:center;
  @media (max-width: 480px) {
    & {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;

export const MenuItem = styled.li`
  margin-left: 25px;
  @media (max-width: 480px) {
    & {
      margin: 0;
      width: 30px;
      transition: all 0.3s linear;
      &:not(:first-child)& > *:hover {
        filter: invert(0.8);
      }
    }
    &:first-child {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const ContainerIconMenu = styled.div`
  position: relative;
  width:26px;
  height:25px;

  
`;


export const CurrentProducts = styled.span`
  position: absolute;
  font-size: 9px;
  font-weight: 600;
  color: black;
  bottom: -17%;
  right: -44%;
  display: inline-block;
  padding: 3px 6px 2px 6px;
  background-color: wheat;
  border-radius: 50%;
`;
