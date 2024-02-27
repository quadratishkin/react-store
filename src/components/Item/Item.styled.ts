import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  border-radius: 10px;
  min-width: 200px;
  padding: 10px;
  flex-basis: 15%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  border: 1px solid black;
`;

export const StyledCircleWrapper = styled.div`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid red;
  color: red;
  text-align: center;
  font-size: 20px;
`;

export const StyledName = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const StyledBrand = styled.div`
  font-size: 14px;
`;

export const StyledPriceButtonField = styled.div`
  display: flex;
  justify-content: center;
`;
