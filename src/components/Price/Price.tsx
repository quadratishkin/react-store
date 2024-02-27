import { PriceWrapper } from "./Price.styled";
import { PriceProps } from "./Price.types";

const Price = ({ price }: PriceProps) => <PriceWrapper>{price}</PriceWrapper>;

export default Price;
