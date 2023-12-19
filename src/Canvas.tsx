import { FC } from "react";
import { ReturnedUseDrawCanvasType } from "./useDrawCanvas";

export const Canvas: FC<ReturnedUseDrawCanvasType> = ({
  canvasRef,
  startDrawing,
  endDrawing,
  draw,
}) => {
  return (
    <div>
      <div
        className="App"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
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
      </div>
    </div>
  );
};
