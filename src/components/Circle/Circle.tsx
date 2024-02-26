import { CircleWrapper } from "./Circle.styled";
import { CircleProps } from "./Circle.types";

const Circle = ({ point }: CircleProps) => (
  <CircleWrapper>
    <div>{point}</div>
  </CircleWrapper>
);

export default Circle;
