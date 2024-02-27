import { CircleWrapper } from "./Circle.styled";
import { CircleProps } from "./Circle.types";

const Circle = ({ index }: CircleProps) => (
  <CircleWrapper>{index}</CircleWrapper>
);

export default Circle;
