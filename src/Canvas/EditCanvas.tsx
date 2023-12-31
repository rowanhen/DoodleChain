import { FC, useEffect } from "react";
import styled from "styled-components";
import { GenericButton } from "../components/GenericButton";
import { ClearCanvas } from "./ClearCanvas";
import { useCanvasDataUrlContract } from "./hooks/useCanvasDataUrlContract";
import { useCanvasEventListener } from "./hooks/useCanvasEventListener";
import { useCanvasSaver } from "./hooks/useCanvasSaver";
import { useDrawCanvas } from "./hooks/useDrawCanvas";

export const EditCanvas: FC = () => {
  const contract = useCanvasDataUrlContract();
  const { saving, saveCurrentCanvas } = useCanvasSaver(contract);
  const { canvasSaved } = useCanvasEventListener(contract);
  const {
    canvasRef,
    ctxRef,
    startDrawing,
    endDrawing,
    draw,
    setLocalCanvasData,
  } = useDrawCanvas();

  const currentCanvasDataUrl = canvasRef?.current?.toDataURL("image/png", 1);

  const clearCanvas = () => {
    if (ctxRef.current) {
      ctxRef.current?.clearRect(0, 0, 16, 16);
      setLocalCanvasData(undefined);
    }
  };

  useEffect(() => {
    if (!canvasSaved) return;
    clearCanvas();
  }, [canvasSaved]);

  return (
    <CanvasContainer>
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
        <ClearCanvas clearCanvas={clearCanvas} />
        <GenericButton
          onClick={() => {
            currentCanvasDataUrl && saveCurrentCanvas(currentCanvasDataUrl);
          }}
        >
          {saving ? "SAVING..." : "SAVE"}
        </GenericButton>
      </ButtonsContainer>
    </CanvasContainer>
  );
};

export const CanvasContainer = styled.div`
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

const CanvasWrapper = styled.div`
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

const Canvas = styled.canvas`
  transform: scale(40, 40);
  image-rendering: pixelated;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 4;
`;
