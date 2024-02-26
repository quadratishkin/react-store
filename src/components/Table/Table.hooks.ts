import { useState } from "react";

export const useStore = () => {
  const [startValue, setStartValue] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<String>("");
  const [items, changeItems] = useState([
    { cost: 0, id: 0 },
    { cost: 0, id: 1 },
    { cost: 0, id: 2 },
    { cost: 0, id: 3 },
    { cost: 0, id: 4 },
    { cost: 0, id: 5 },
    { cost: 0, id: 6 },
    { cost: 0, id: 7 },
  ]);
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const forwardMove = () => {
    if (startValue === 4) {
      return;
    }
    setStartValue(startValue + 1);
  };
  const backwardMove = () => {
    if (startValue === 0) {
      return;
    }
    setStartValue(startValue - 1);
  };

  return {
    startValue,
    setStartValue,
    selectedOption,
    selectChange,
    items,
    changeItems,
    forwardMove,
    backwardMove,
  };
};
