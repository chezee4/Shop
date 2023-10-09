import { styled } from "styled-components";

export const Messages = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;
export const Message = styled.li``;

export const IconProduct = styled.div`
  & > svg {
    cursor: pointer;
    transition: all 0.25s linear;
    font-size: 28px;
  }
`;
