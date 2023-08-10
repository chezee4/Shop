import { styled } from "styled-components";

export const CartItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: -3px 4px 15px -9px black;
  margin-bottom: 20px;
    padding-right: 25px;
`;
export const CartItemTitle = styled.h4`
 color: #fbf1ca;
`;
export const CartItemPrice = styled.span`
 color: #fbf1ca;
`;
export const CartItemTotalPrice = styled.span`
 color: #fbf1ca;
`;
export const CartItemDelete = styled.button`
 padding:8px 14px ;
 border-radius: 40px;
 cursor: pointer;
 background-color: #fbf1ca;
`;
export const ContainerImage = styled.div`
 width: 150px;
    height: 150px;
    & img {
        width:100%;
        height:100%;
    }

`;
