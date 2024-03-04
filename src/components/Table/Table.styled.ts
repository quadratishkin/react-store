import styled from "styled-components";
import { getCursor, getHoverBackground, getOpacity } from "./Table.utils";

export const StyledTableWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-inline: 10%;
  padding-block-end: 70px;
  color: black;
  width: 80%;
`;

export const StyledFilterBlock = styled.div<{ windowwidth: number }>`
  display: flex;
  flex-direction: ${({ windowwidth }) =>
    windowwidth < 900 ? "column" : "row"};
  gap: 40px;
`;

export const StyledField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorElem = styled.div`
  color: red;
`;

export const StyledTableButtonSelect = styled.select`
  background-color: white;
  padding: 5px;
  font-size: 30px;
  width: 250px;
  height: 50px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const StyledInput = styled.input`
  width: 245px;
  height: 45px;
  font-size: 14px;
`;

export const StyledTableButton = styled.button<{
  buttontype: string;
  currentvalue: number;
}>`
  background-color: white;
  font-size: 30px;
  width: 250px;
  height: 50px;
  cursor: ${({ buttontype, currentvalue }) =>
    getCursor(buttontype, currentvalue)};
  opacity: ${({ buttontype, currentvalue }) =>
    getOpacity(buttontype, currentvalue)};
  &:hover {
    background-color: ${({ buttontype, currentvalue }) =>
      getHoverBackground(buttontype, currentvalue)};
  }
`;
