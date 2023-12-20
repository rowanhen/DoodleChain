import { FC } from "react";
import styled from "styled-components";
import { ReturnedUseDrawCanvasType } from "./useDrawCanvas";

export const EditCanvas: FC<
  Pick<
    ReturnedUseDrawCanvasType,
    "canvasRef" | "startDrawing" | "endDrawing" | "draw"
  >
> = ({ canvasRef, startDrawing, endDrawing, draw }) => {
  return (
    <CanvasContiner>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onMouseMove={draw}
        width="16px"
        height="16px"
        style={{
          transform: "scale(20)",
          background: "lime",
          imageRendering: "pixelated",
        }}
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
