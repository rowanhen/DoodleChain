import { FC, ReactNode } from "react";
import styled from "styled-components";
import { RoundedButton } from "../RoundedButton";

export const ModalComponent: FC<{
  children?: ReactNode;
  id: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ children, id, isOpen, onClose }) => {
  return (
    <Dialog id={id} open={isOpen ? true : undefined}>
      <RoundedButton onClick={onClose}>X</RoundedButton>
      {children}
    </Dialog>
  );
};

const Dialog = styled.dialog`
  animation: fade-in 0.1s ease-out;
  ::backdrop {
    animation: backdrop-fade-in 0.1s ease-in forwards;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @keyframes backdrop-fade-in {
    0% {
      background-color: rgb(0 0 0 / 0);
    }
    100% {
      background-color: rgb(0 0 0 / 0.5);
    }
  }
`;
