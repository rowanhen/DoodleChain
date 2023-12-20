import { FC } from "react";
import styled from "styled-components";

export const GenericButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  background: none;
  border: 1px solid black;
  cursor: pointer;
`;