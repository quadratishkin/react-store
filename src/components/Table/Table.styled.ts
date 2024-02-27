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

export const FilterBlock = styled.div`
  display: flex;
  gap: 40px;
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
  padding: 5px;
  font-size: 30px;
  width: 250px;
  height: 70px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const TableButton = styled.button<{
  buttontype: string;
  currentvalue: number;
}>`
  background-color: white;
  font-size: 30px;
  width: 250px;
  height: 70px;
  cursor: ${({ buttontype, currentvalue }) =>
    getCursor(buttontype, currentvalue)};
  opacity: ${({ buttontype, currentvalue }) =>
    getOpacity(buttontype, currentvalue)};
  &:hover {
    background-color: ${({ buttontype, currentvalue }) =>
      getHoverBackground(buttontype, currentvalue)};
  }
`;
