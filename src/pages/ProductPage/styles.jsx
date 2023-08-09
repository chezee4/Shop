import styled from "styled-components";

export const ConteinerCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const HomeLink = styled.span`
  position: absolute;
  display: inline-block;
  color: #e8d0a3;
  top: -52px;
  right: -10px;
  transition: all 0.2s linear;
  &:hover {
    color: #d4a95a;
  }
`;

export const ContainerProductImg = styled.div`
  max-width: 450px;
  max-height: 540px;
  background-color: #fdfdfd;
  border-radius: 15px;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductContent = styled.div`
  max-width: 500px;
`;

export const ProductTitle = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 134.615%;
  margin-bottom: 20px;
`;

export const ProductDescr = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 400;
  line-height: 168.75%;
`;

export const ProductPrice = styled.span`
  display: inline-block;
  font-size: 20px;
  color: #fbfad3;
  font-weight: 500;
  line-height: 130%;
  text-transform: capitalize;
  margin-bottom: 40px;
`;

export const ProductCategory = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 168.75%;
  color: #dcd795;
`;

export const ConteinerCategory = styled.div`
& span:first-child {
    font-size:20px;
}
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ContainerAddProduct = styled.div`
  margin-bottom: 30px;
  & > button {
    cursor: pointer;
    padding: 15px 60px;
    background-color: wheat;
    transition: all 0.2s linear;
    &:hover {
      background-color: #dcb66e;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 40px;
`;

export const Stars = styled.div``;

export const NumberOfComments = styled.span``;
