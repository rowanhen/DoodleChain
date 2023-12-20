import { CanvasContiner } from "./EditCanvas";
import { calculateCanvasHeight } from "./helpers";
import { useCanvasDataUrlContract } from "./useCanvasDataUrlContract";
import { useLoadCanvases } from "./useLoadCanvas";

export const ViewAllCanvas = () => {
  const { canvases } = useCanvasDataUrlContract();
  const { viewCanvasRef } = useLoadCanvases(canvases);

  const size = calculateCanvasHeight(canvases.length) * 16;
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
          transform: "scale(10)",
          background: "lime",
          imageRendering: "pixelated",
        }}
      />
    </CanvasContiner>
  );
};
