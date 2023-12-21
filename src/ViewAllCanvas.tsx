import { CanvasContiner } from "./EditCanvas";
import { calculateCanvasHeight } from "./helpers";
import { useCanvasDataUrlContract } from "./useCanvasDataUrlContract";
import { useLoadCanvases } from "./useLoadCanvas";

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
      <canvas
        ref={viewCanvasRef}
        width={width}
        height={height}
        style={{
          transform: "scale(1.5, 0.75)",
          imageRendering: "pixelated",
          background: "#ffd400",
          filter: "invert(1)",
        }}
      />
    </CanvasContiner>
  );
};
