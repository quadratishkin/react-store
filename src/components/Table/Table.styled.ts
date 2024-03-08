import styled from "styled-components";
import { getCursor, getHoverBackground, getOpacity } from "./Table.utils";

export const StyledTableWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-inline: 5%;
  padding-block-end: 70px;
  color: black;
  width: 90%;
`;

export const StyledFilterBlock = styled.div<{ windowwidth: number }>`
  display: flex;
  flex-direction: ${({ windowwidth }) =>
    windowwidth < 900 ? "column" : "row"};
  gap: 40px;
`;

export const StyledLoader = styled.div`
  margin: auto;
  width: 48px;
  height: 48px;
  border: 5px dotted black;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledField = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledPageNumber = styled.button<{ iscurrentpage: string }>`
  width: 60px;
  gap: 5px;
  background-color: transparent;
  border: ${({ iscurrentpage }) =>
    iscurrentpage === "true" ? "2px solid black" : "none"};
  font-size: 24px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    background-color: rgb(205 190 172 / 30%);
  }
`;

export const StyledButtons = styled.div<{ windowwidth: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ windowwidth }) =>
    windowwidth < 500 ? "column" : "row"};
  gap: 30px;
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
  caret-color: auto;
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
  min-width: 150px;
  max-width: 250px;
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
