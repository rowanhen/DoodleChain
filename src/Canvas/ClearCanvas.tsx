// ClearCanvas.tsx
import { FC } from "react";
import styled from "styled-components";
import { GenericButton } from "../components/GenericButton";
import { useModal } from "../components/Modal/useModal";
import { CtxType } from "./hooks/useDrawCanvas";

export const ClearCanvas: FC<CtxType> = ({ ctxRef }) => {
  const { open, close, Modal } = useModal();

  return (
    <>
      <Modal title="Clear canvas">
        <p>This is a destructive action that cannot be undone.</p>
        <p>Are you sure you want to continue?</p>
        <ButtonContainer>
          <GenericButton autoFocus onClick={() => close()}>
            No no no, go back!
          </GenericButton>
          <GenericButton
            onClick={() => {
              if (ctxRef.current) {
                ctxRef.current?.clearRect(0, 0, 16, 16);
              }
              close();
            }}
          >
            Do it. Delete it all.
          </GenericButton>
        </ButtonContainer>
      </Modal>
      <GenericButton onClick={() => open()}>CLEAR</GenericButton>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
