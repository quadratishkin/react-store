import { PriceWrapper } from "./Price.styled";
import { PriceProps } from "./Price.types";

const Price = ({ cost }: PriceProps) => <PriceWrapper>{cost}</PriceWrapper>;

export default Price;
