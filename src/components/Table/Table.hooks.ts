import { useEffect, useState } from "react";
import { INITIAL_ITEMS, PAGE_STEP } from "./Table.constansts";
import { end, getInitialItems } from "./Table.requests";

export const useStore = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [items, changeItems] = useState(INITIAL_ITEMS);
  const [windowwidth, setWidth] = useState(window.innerWidth);

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
  const handelPageNumberClick = (index: number) => {
    setCurrentValue(index * PAGE_STEP);
  };

  const setCurrentValueToZero = () => {
    setCurrentValue(0);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    getInitialItems({ changeItems, setCurrentValueToZero });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    currentValue,
    items,
    changeItems,
    setCurrentValueToZero,
    forwardMove,
    backwardMove,
    handelPageNumberClick,
    windowwidth,
  };
};

export const useFilter = () => {
  const [filterString, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("price");

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return {
    filterString,
    setInputValue,
    isError,
    setIsError,
    selectedOption,
    selectChange,
  };
};
