import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid#D8D8D8;
`;
export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1270px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-block: 8px;
`;
export const Content = styled.nav`
  display: flex;
  @media (max-width: 480px) {
    & {
      flex-direction: column;
      position: fixed;
      align-items: flex-start;
      z-index: 999;
      justify-content: flex-start;
      top: 52px;
      right: ${(props) => (props.burgerActive ? 0 : "-100%")};
      width: 12em;
      height: 100%;
      transition: all 0.5s ease;
      background-color: rgb(117, 117, 117);
    }
  }
`;
