import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  background-color: #90f2ff;
  border-radius: 10px;
  min-width: 200px;
  padding: 10px;
  flex-basis: 15%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid black;
`;

export const StyledCircleWrapper = styled.div`
  background-color: #7098da;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #7098da;
  color: white;
  text-align: center;
  font-size: 20px;
`;

export const StyledName = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const StyledBrand = styled.div`
  font-size: 14px;
  text-align: end;
`;

export const StyledPriceButtonField = styled.div`
  display: flex;
  justify-content: center;
`;
