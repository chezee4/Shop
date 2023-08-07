import { styled } from "styled-components";

export const MenuList = styled.ul`
  display: flex;
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
