import styled from "styled-components";
import { calculateCanvasHeight } from "../helpers";
import { CanvasContiner } from "./EditCanvas";
import { useCanvasDataUrlContract } from "./hooks/useCanvasDataUrlContract";
import { useLoadCanvases } from "./hooks/useLoadCanvas";

const CANVAS_SIZE = 128;

export const ViewAllCanvas = () => {
  const { canvases } = useCanvasDataUrlContract();
  const { viewCanvasRef } = useLoadCanvases(canvases, CANVAS_SIZE);

  const size = calculateCanvasHeight(canvases.length) * CANVAS_SIZE;
  const width = size + "px";
  const height = size + "px";

  return (
    <CanvasContiner
      style={{
        zIndex: "1",
      }}
    >
      <Canvas ref={viewCanvasRef} width={width} height={height} />
    </CanvasContiner>
  );
};

export const Canvas = styled.canvas`
  transform: scale(1.5, 0.75);
  image-rendering: pixelated;
`;
