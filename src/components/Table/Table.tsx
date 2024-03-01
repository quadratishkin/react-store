import Item from "../Item/Item";
import { useStore } from "./Table.hooks";
import { useState } from "react";
import { filterBrand, filterName, filterPrice } from "./Table.requests";
import { PAGE_STEP } from "./Table.constansts";
import {
  StyledButtons,
  StyledField,
  StyledFilterBlock,
  StyledTableButton,
  StyledTableButtonSelect,
  StyledTableWrapper,
} from "./Table.styled";

const Table = () => {
  const [filterString, setInputValue] = useState("");

  const {
    currentValue,
    selectedOption,
    selectChange,
    items,
    changeItems,
    forwardMove,
    backwardMove,
  } = useStore();
  const handleClick = () => {
    switch (selectedOption) {
      case "brand":
        filterBrand({ filterString, changeItems });
        break;
      case "product":
        filterName({ filterString, changeItems });
        break;
      default:
        if (isNaN(Number(filterString)) || filterString === "") {
          return;
        }
        filterPrice({ filterString, changeItems });
        break;
    }
  };

  return (
    
    <StyledTableWrapper>
      <StyledTableButtonSelect onChange={selectChange}>
        <option defaultValue={"DEFAULT"} disabled>
          Choose one
        </option>
        <option value="price">Price</option>
        <option value="product">Product</option>
        <option value="brand">Brand</option>
      </StyledTableButtonSelect>
      <StyledFilterBlock>
        <StyledTableButton
          currentvalue={currentValue}
          onClick={handleClick}
          buttontype="filter"
        >
          Отфильтровать
        </StyledTableButton>
        <input
          value={filterString}
          onChange={(e) => setInputValue(e.target.value)}
          id="filterInput"
        />
      </StyledFilterBlock>
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
