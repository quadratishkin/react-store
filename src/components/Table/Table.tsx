import {
  Buttons,
  Field,
  FilterBlock,
  TableButton,
  TableButtonSelect,
  TableWrapper,
} from "./Table.styled";
import Item from "../Item/Item";
import { useStore } from "./Table.hooks";
import { useState } from "react";
import {
  filterBrand,
  filterName,
  filterPrice,
  getInitialItems,
} from "./Table.requests";
import { PAGE_STEP } from "./Table.constansts";

const Table = () => {
  const [inputValue, setInputValue] = useState("");

  const {
    currentValue,
    selectedOption,
    selectChange,
    items,
    changeItems,
    forwardMove,
    backwardMove,
  } = useStore();
  const handleIntitialItems = () => {
    getInitialItems(changeItems);
  };
  const handleClick = () => {
    switch (selectedOption) {
      case "brand":
        filterBrand(inputValue, changeItems);
        break;
      case "product":
        filterName(inputValue, changeItems);
        break;
      default:
        if (isNaN(Number(inputValue)) || inputValue === "") {
          return;
        }
        filterPrice(Number(inputValue), changeItems);
        break;
    }

    // changeItems([
    //   { cost: 0, id: 4 },
    //   { cost: 0, id: 0 },
    //   { cost: 0, id: 1 },
    //   { cost: 0, id: 7 },
    //   { cost: 0, id: 5 },
    //   { cost: 0, id: 2 },
    //   { cost: 0, id: 3 },
    //   { cost: 0, id: 6 },
    // ]);
  };

  return (
    <TableWrapper>
      <TableButtonSelect onChange={selectChange} style={styles.select}>
        <option defaultValue={"DEFAULT"} disabled>
          Choose one
        </option>
        <option value="price">Price</option>
        <option value="product">Product</option>
        <option value="brand">Brand</option>
      </TableButtonSelect>
      <FilterBlock>
        <TableButton
          currentvalue={currentValue}
          onClick={handleClick}
          buttontype="filter"
        >
          Отфильтровать
        </TableButton>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="filterInput"
        />
        <button onClick={handleIntitialItems}>создать 50</button>
      </FilterBlock>
      <Field>
        {items.map((item, index) => [
          index >= currentValue && index < currentValue + PAGE_STEP && (
            <Item
              index={index}
              key={item.id}
              price={item.price}
              brand={item.brand}
              product={item.product}
            />
          ),
        ])}
      </Field>
      <Buttons>
        <TableButton
          onClick={backwardMove}
          currentvalue={currentValue}
          buttontype="backward"
        >
          назад
        </TableButton>
        <TableButton
          onClick={forwardMove}
          currentvalue={currentValue}
          buttontype="forward"
        >
          вперёд
        </TableButton>
      </Buttons>
    </TableWrapper>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  select: {
    padding: 5,
    width: 200,
  },
  result: {
    marginTop: 30,
  },
};

export default Table;
