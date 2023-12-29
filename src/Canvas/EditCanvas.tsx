import { FC } from "react";
import styled from "styled-components";
import { ReturnedUseDrawCanvasType } from "./hooks/useDrawCanvas";

export const EditCanvas: FC<
  Pick<
    ReturnedUseDrawCanvasType,
    "canvasRef" | "startDrawing" | "endDrawing" | "draw"
  >
> = ({ canvasRef, startDrawing, endDrawing, draw }) => {
  return (
    <CanvasContiner>
      <Canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onMouseMove={draw}
        width="16px"
        height="16px"
      />
    </CanvasContiner>
  );
};

export const CanvasContiner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Canvas = styled.canvas`
  transform: scale(40, 40);
  image-rendering: pixelated;
`;
