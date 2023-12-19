import { useCallback, useEffect, useRef, useState } from "react";

export const useDrawCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    ctx.lineCap = "square";
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.globalCompositeOperation = "source-over";
    ctxRef.current = ctx;
  }, []);

  const startDrawing = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      const canvas = canvasRef.current;
      if (!canvas || !ctxRef.current) return;

      ctxRef.current.beginPath();
      ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current.stroke();
      setIsDrawing(true);
    },
    []
  );

  const endDrawing = useCallback(() => {
    if (!ctxRef.current) return;
    ctxRef.current.closePath();
    setIsDrawing(false);
  }, []);

  const draw = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!isDrawing || !ctxRef.current || !canvasRef.current) return;

      ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctxRef.current.stroke();
    },
    [isDrawing, canvasRef, ctxRef]
  );

  return { canvasRef, startDrawing, endDrawing, draw };
};

export type ReturnedUseDrawCanvasType = ReturnType<typeof useDrawCanvas>;
export type CanvasType = Pick<ReturnType<typeof useDrawCanvas>, "canvasRef">;
