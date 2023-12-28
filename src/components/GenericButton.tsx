import { FC } from "react";
import styled from "styled-components";
import { pixelatedBg } from "../styles";

export const GenericButton: FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  min-height: 40px;
  min-width: 68px;
  aspect-ratio: 2;

  ${pixelatedBg}
`;
