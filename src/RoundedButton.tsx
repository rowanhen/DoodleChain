import { FC } from "react";
import styled from "styled-components";

export const RoundedButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid black;
  cursor: pointer;
`;
