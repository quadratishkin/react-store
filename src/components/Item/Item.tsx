import Price from "../Price/Price";
import {
  Brand,
  ItemWrapper,
  Name,
  PriceButtonField,
  StyledCircle,
} from "./Item.styled";
import { ItemsProps } from "./Item.types";

const Item = ({ cost, point }: ItemsProps) => {
  return (
    <ItemWrapper>
      <div>
        <StyledCircle point={point}></StyledCircle>
      </div>
      <Name>Кушида</Name>
      <Brand>Добро пожаловать в класс преводсходства</Brand>
      <PriceButtonField>
        <Price cost={cost}></Price>
      </PriceButtonField>
    </ItemWrapper>
  );
};

export default Item;
