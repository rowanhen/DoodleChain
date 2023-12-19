// ClearCanvas.tsx
import { FC } from "react";
import styled from "styled-components";
import { GenericButton } from "./GenericButton";
import { CanvasType } from "./useDrawCanvas";

const Dialog = styled.dialog``;

export const ClearCanvas: FC<CanvasType> = ({ canvasRef }) => {
  const dialog = document.querySelector("dialog");

  return (
    <>
      <Dialog>
        <p>This is a destructive action that cannot be undone.</p>
        <p>Are you sure you want to continue?</p>
        <ButtonContainer>
          <GenericButton autoFocus>No no no, go back!</GenericButton>
          <GenericButton
            onClick={() => {
              if (canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
                ctx?.clearRect(0, 0, 16, 16);
              }
              dialog?.close();
            }}
          >
            Do it. Delete it all.
          </GenericButton>
        </ButtonContainer>
      </Dialog>
      <GenericButton onClick={() => dialog?.showModal()}>CLEAR</GenericButton>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
