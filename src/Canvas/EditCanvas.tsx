import { FC, useEffect } from "react";
import styled from "styled-components";
import { GenericButton } from "../components/GenericButton";
import { ClearCanvas } from "./ClearCanvas";
import { useCanvasDataUrlContract } from "./hooks/useCanvasDataUrlContract";
import { useDrawCanvas } from "./hooks/useDrawCanvas";

export const EditCanvas: FC = () => {
  const { canvasRef, ctxRef, startDrawing, endDrawing, draw } = useDrawCanvas();
  const { canvasSaved, saving, saveCurrentCanvas } = useCanvasDataUrlContract();

  const currentCanvasDataUrl = canvasRef?.current?.toDataURL();

  useEffect(() => {
    if (!canvasSaved) return;
    if (ctxRef.current) {
      ctxRef.current?.clearRect(0, 0, 16, 16);
    }
  }, [canvasSaved]);

  return (
    <CanvasContiner>
      <CanvasWrapper>
        <Canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          onMouseMove={draw}
          width="16px"
          height="16px"
        />
      </CanvasWrapper>
      <ButtonsContainer>
        <ClearCanvas ctxRef={ctxRef} />
        <GenericButton
          onClick={() => {
            currentCanvasDataUrl && saveCurrentCanvas(currentCanvasDataUrl);
          }}
        >
          {saving ? "SAVING..." : "SAVE"}
        </GenericButton>
      </ButtonsContainer>
    </CanvasContiner>
  );
};

export const CanvasContiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const CanvasWrapper = styled.div`
  position: relative;
  height: 640px;
  width: 640px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Canvas = styled.canvas`
  transform: scale(40, 40);
  image-rendering: pixelated;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 4;
`;
