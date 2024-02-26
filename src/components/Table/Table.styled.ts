import styled from "styled-components";
import { getCursor, getHoverBackground, getOpacity } from "./Table.utils";

export const TableWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-inline: 10%;
  padding-block-end: 70px;
  background-color: white;
  color: black;
  width: 80%;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableButtonSelect = styled.select`
  font-size: 30px;
  width: 250px;
  height: 70px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const TableButton = styled.button<{
  buttonType: string;
  currentValue: number;
}>`
  background-color: white;
  font-size: 30px;
  width: 250px;
  height: 70px;
  cursor: ${({ buttonType, currentValue }) =>
    getCursor(buttonType, currentValue)};
  opacity: ${({ buttonType, currentValue }) =>
    getOpacity(buttonType, currentValue)};
  &:hover {
    background-color: ${({ buttonType, currentValue }) =>
      getHoverBackground(buttonType, currentValue)};
  }
`;
