import {
  Buttons,
  Field,
  TableButton,
  TableButtonSelect,
  TableWrapper,
} from "./Table.styled";
import Item from "../Item/Item";
import { useState } from "react";
import { useStore } from "./Table.hooks";

const Table = () => {
  const {
    startValue,
    setStartValue,
    selectedOption,
    selectChange,
    items,
    changeItems,
    forwardMove,
    backwardMove,
  } = useStore();

  const handleClick = () => {
    changeItems([
      { cost: 0, id: 4 },
      { cost: 0, id: 0 },
      { cost: 0, id: 1 },
      { cost: 0, id: 7 },
      { cost: 0, id: 5 },
      { cost: 0, id: 2 },
      { cost: 0, id: 3 },
      { cost: 0, id: 6 },
    ]);
  };

  return (
    <TableWrapper>
      <TableButtonSelect onChange={selectChange} style={styles.select}>
        <option defaultValue={"DEFAULT"} disabled>
          Choose one
        </option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </TableButtonSelect>
      <TableButton
        buttonType="filter"
        currentValue={startValue}
        onClick={handleClick}
      >
        Отфильтровать
      </TableButton>
      <Field>
        {items.map((item, index) => [
          index >= startValue && index < startValue + 4 && (
            <Item key={item.id} cost={item.cost} point={item.id}></Item>
          ),
        ])}
      </Field>
      <Buttons>
        <TableButton
          onClick={backwardMove}
          buttonType="backward"
          currentValue={startValue}
        >
          назад
        </TableButton>
        <TableButton
          onClick={forwardMove}
          buttonType="forward"
          currentValue={startValue}
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
