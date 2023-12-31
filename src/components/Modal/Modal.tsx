import { ReactNode, Ref, forwardRef } from "react";
import styled from "styled-components";
import { RoundedButton } from "../RoundedButton";

export type ModalProps = {
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
};

export const ModalComponent = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, title, onClose }, ref: Ref<HTMLDialogElement>) => {
    const handleClose = () => {
      if (typeof ref !== "function" && ref?.current) {
        onClose && onClose();
        ref.current.close();
      }
    };

    return (
      <Dialog ref={ref}>
        <TitleContainer>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </TitleContainer>
        {children}
      </Dialog>
    );
  }
);

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
`;

const CloseButton = styled(RoundedButton)``;

const Dialog = styled.dialog`
  border-radius: 4px;
  &[open] {
    animation: fade-in 0.1s ease-out;
  }

  &[open]::backdrop {
    animation: backdrop-fade-in 0.1s ease-out forwards;
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
      background-color: rgb(0 0 0 / 0.3);
    }
  }
`;
