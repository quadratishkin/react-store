import styled from "styled-components";

export const ItemWrapper = styled.div`
  border-radius: 10px;
  min-width: 200px;
  padding: 10px;
  flex-basis: 15%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  border: 1px solid black;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const Brand = styled.div`
  font-size: 14px;
`;

export const PriceButtonField = styled.div`
  display: flex;
  justify-content: center;
`;
