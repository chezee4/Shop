import { styled, keyframes } from "styled-components";

export const ContainerList = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  margin-left: auto;
  margin-top: 50px;
  margin-bottom:35px;
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 60px 15px;
  }
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`;

export const ButtonLoading = styled.button`
  display: ${(props) => (props.lastFetch ? "none" : "flex")};
  padding-inline: 22px;
  padding-block: 5px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 60px;
  & img {
    width: 35px;
    height: 35px;
  }
  &:hover& > img {
    animation: ${spinAnimation} 2s linear infinite;
    transform-origin: 50% 50%;
  }
`;

export const ButtonText = styled.span`
  padding-left: 10px;
`;
