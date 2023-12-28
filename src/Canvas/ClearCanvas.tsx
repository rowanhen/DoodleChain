// ClearCanvas.tsx
import { FC } from "react";
import styled from "styled-components";
import { GenericButton } from "../components/GenericButton";
import { CtxType } from "./hooks/useDrawCanvas";

export const ClearCanvas: FC<CtxType> = ({ ctxRef }) => {
  const dialog = document.querySelector("dialog");

  return (
    <>
      <Dialog>
        <p>This is a destructive action that cannot be undone.</p>
        <p>Are you sure you want to continue?</p>
        <ButtonContainer>
          <GoBackButton autoFocus onClick={() => dialog?.close()}>
            No no no, go back!
          </GoBackButton>
          <DeleteButton
            onClick={() => {
              if (ctxRef.current) {
                ctxRef.current?.clearRect(0, 0, 16, 16);
              }
              dialog?.close();
            }}
          >
            Do it. Delete it all.
          </DeleteButton>
        </ButtonContainer>
      </Dialog>
      <GenericButton onClick={() => dialog?.showModal()}>CLEAR</GenericButton>
    </>
  );
};

const Dialog = styled.dialog`
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
      background-color: rgb(0 0 0 / 0.1);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled(GenericButton)`
  color: white;
  background-color: red;
`;

const GoBackButton = styled(GenericButton)`
  color: white;
  background-color: lime;
`;
