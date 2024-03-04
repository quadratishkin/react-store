import Item from "../item/Item";
import { PAGE_STEP } from "./Table.constansts";

import { useFilter, useStore } from "./Table.hooks";
import { filterBrand, filterName, filterPrice } from "./Table.requests";
import {
  ErrorElem,
  StyledButtons,
  StyledField,
  StyledFilterBlock,
  StyledInput,
  StyledTableButton,
  StyledTableButtonSelect,
  StyledTableWrapper,
} from "./Table.styled";

const Table = () => {
  const {
    filterString,
    setInputValue,
    isError,
    setIsError,
    selectedOption,
    selectChange,
  } = useFilter();
  const {
    currentValue,
    items,
    changeItems,
    forwardMove,
    backwardMove,
    windowwidth,
  } = useStore();
  const handleClick = () => {
    switch (selectedOption) {
      case "brand":
        setIsError(false);
        filterBrand({ filterString, changeItems });
        break;
      case "product":
        setIsError(false);
        filterName({ filterString, changeItems });
        break;
      default:
        if (isNaN(Number(filterString)) || filterString === "") {
          setIsError(true);
          return;
        }
        setIsError(false);
        filterPrice({ filterString, changeItems });
        break;
    }
  };

  return (
    <StyledTableWrapper>
      <StyledFilterBlock windowwidth={windowwidth}>
        <StyledTableButtonSelect onChange={selectChange}>
          <option defaultValue={"DEFAULT"} disabled>
            Choose one
          </option>
          <option value="price">Price</option>
          <option value="product">Product</option>
          <option value="brand">Brand</option>
        </StyledTableButtonSelect>
        <StyledInput
          value={filterString}
          onChange={(e) => setInputValue(e.target.value)}
          id="filterInput"
        />
        <StyledTableButton
          currentvalue={currentValue}
          onClick={handleClick}
          buttontype="filter"
        >
          Отфильтровать
        </StyledTableButton>
      </StyledFilterBlock>

      {isError && <ErrorElem>Введённое значение не коректно</ErrorElem>}
      {items.length === 0 && <ErrorElem>Ничего не найдено</ErrorElem>}
      <StyledField>
        {items.map((item, index) => [
          index >= currentValue && index < currentValue + PAGE_STEP && (
            <Item
              index={index + 1}
              key={item.id}
              price={item.price}
              brand={item.brand}
              product={item.product}
            />
          ),
        ])}
      </StyledField>
      <StyledButtons>
        <StyledTableButton
          onClick={backwardMove}
          currentvalue={currentValue}
          buttontype="backward"
        >
          назад
        </StyledTableButton>
        <StyledTableButton
          onClick={forwardMove}
          currentvalue={currentValue}
          buttontype="forward"
        >
          вперёд
        </StyledTableButton>
      </StyledButtons>
    </StyledTableWrapper>
  );
};

export default Table;
