import { useEffect, useState } from "react";
import { INITIAL_ITEMS, PAGE_STEP } from "./Table.constansts";
import { end, getInitialItems } from "./Table.requests";

export const useStore = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState("price");
  const [items, changeItems] = useState(INITIAL_ITEMS);
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const forwardMove = () => {
    if (currentValue >= end - PAGE_STEP) {
      return;
    }
    setCurrentValue(currentValue + PAGE_STEP);
  };
  const backwardMove = () => {
    if (currentValue === 0) {
      return;
    }
    setCurrentValue(currentValue - PAGE_STEP);
  };

  useEffect(() => {
    getInitialItems({changeItems});
  }, []);

  return {
    currentValue,
    selectedOption,
    selectChange,
    items,
    changeItems,
    forwardMove,
    backwardMove,
  };
};
