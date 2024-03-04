import Price from "../price/Price";
import {
  StyledBrand,
  StyledCircleWrapper,
  StyledItemWrapper,
  StyledName,
  StyledPriceButtonField,
} from "./Item.styled";
import { ItemsProps } from "./Item.types";

const Item = ({ index, brand, price, product }: ItemsProps) => {
  return (
    <StyledItemWrapper>
      <div>
        <StyledCircleWrapper>{index}</StyledCircleWrapper>
      </div>
      <StyledName>{product}</StyledName>
      <StyledBrand>{brand}</StyledBrand>
      <StyledPriceButtonField>
        <Price price={price} />
      </StyledPriceButtonField>
    </StyledItemWrapper>
  );
};

export default Item;
