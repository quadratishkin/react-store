import { useState } from "react";
import { PAGE_STEP } from "./Table.constansts";
import { end } from "./Table.requests";

export const useStore = () => {
  const [currentValue, setStartValue] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<String>("price");
  const [items, changeItems] = useState([
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
    { brand: "Baraka", id: "0", price: 0, product: "Кушида" },
  ]);
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const forwardMove = () => {
    if (currentValue >= end - PAGE_STEP) {
      return;
    }
    setStartValue(currentValue + PAGE_STEP);
  };
  const backwardMove = () => {
    if (currentValue === 0) {
      return;
    }
    setStartValue(currentValue - PAGE_STEP);
  };

  // useEffect(() => {
  //   getInitialItems(changeItems);
  // });

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
