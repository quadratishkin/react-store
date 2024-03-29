import { useEffect, useState } from "react";
import { PAGE_STEP } from "./Table.constansts";
import { end, getInitialItems } from "./Table.requests";
import { RequestItem } from "./Table.types";

export const useStore = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [items, changeItems] = useState<RequestItem[]>([]);
  const [windowwidth, setWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

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

    getInitialItems({ changeItems, setCurrentValueToZero, setIsLoading, setIsNotFound });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    currentValue,
    items,
    isNotFound,
    setIsNotFound,
    isLoading,
    setIsLoading,
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
