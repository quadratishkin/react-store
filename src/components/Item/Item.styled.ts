import styled from "styled-components";
import Circle from "../Circle/Circle";

export const ItemWrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  flex-basis: 15%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  border: 1px solid black;
`;

export const Name = styled.div`
  text-align: center;
  font-size: 36px;
`;

export const Brand = styled.div`
  font-size: 22px;
`;

export const StyledCircle = styled(Circle)`
  position: absolute;
  left: 5px;
  top: 5px;
`;

export const PriceButtonField = styled.div`
  display: flex;
  justify-content: center;
`;
