import { PAGE_STEP } from "./Table.constansts";
import { end } from "./Table.requests";

export const getHoverBackground = (
  buttonType: string,
  currentValue: number
) => {
  switch (true) {
    case currentValue === 0 && buttonType === "backward":
      return `white`;
    case currentValue >= end - PAGE_STEP &&
      buttonType === "forward":
      return `white`;
    default:
      return "lightgray";
  }
};

export const getOpacity = (buttonType: string, currentValue: number) => {
  switch (true) {
    case currentValue === 0 && buttonType === "backward":
      return `0.5`;
    case currentValue >= end - PAGE_STEP &&
      buttonType === "forward":
      return `0.5`;
    default:
      return "1";
  }
};

export const getCursor = (buttonType: string, currentValue: number) => {
  switch (true) {
    case currentValue === 0 && buttonType === "backward":
      return `default`;
    case currentValue >= end - PAGE_STEP &&
      buttonType === "forward":
      return `default`;
    default:
      return "pointer";
  }
};
