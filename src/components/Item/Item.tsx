import Circle from "../Circle/Circle";
import Price from "../Price/Price";
import { Brand, ItemWrapper, Name, PriceButtonField } from "./Item.styled";
import { ItemsProps } from "./Item.types";

const Item = ({ index, brand, price, product }: ItemsProps) => {
  return (
    <ItemWrapper>
      <div>
        <Circle index={index}></Circle>
      </div>
      <Name>{product}</Name>
      <Brand>{brand}</Brand>
      <PriceButtonField>
        <Price price={price} />
      </PriceButtonField>
    </ItemWrapper>
  );
};

export default Item;
