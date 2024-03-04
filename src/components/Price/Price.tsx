import { StyledPriceWrapper } from "./Price.styled";
import { PriceProps } from "./Price.types";

const Price = ({ price }: PriceProps) => (
  <StyledPriceWrapper>{price} </StyledPriceWrapper>
);

export default Price;
