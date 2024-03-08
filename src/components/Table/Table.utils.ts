import { PAGE_STEP } from "./Table.constansts";
import { end } from "./Table.requests";

export const getHoverBackground = (
  buttonType: string,
  currentValue: number
) => {
  switch (true) {
    case (currentValue === 0 && buttonType === "backward") ||
      (currentValue >= end - PAGE_STEP && buttonType === "forward"):
      return "white";
    default:
      return "rgb(45 195 207 / 43%);";
  }
};

export const getOpacity = (buttonType: string, currentValue: number) => {
  switch (true) {
    case (currentValue === 0 && buttonType === "backward") ||
      (currentValue >= end - PAGE_STEP && buttonType === "forward"):
      return "0.4";
    default:
      return "1";
  }
};

export const getCursor = (buttonType: string, currentValue: number) => {
  switch (true) {
    case (currentValue === 0 && buttonType === "backward") ||
      (currentValue >= end - PAGE_STEP && buttonType === "forward"):
      return "default";
    default:
      return "pointer";
  }
};
