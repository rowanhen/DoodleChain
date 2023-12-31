import { useEffect, useRef } from "react";

export const useLoadCanvases = (dataURL: string, size: number) => {
  const viewCanvasRef = useRef<HTMLCanvasElement>(null);
  const viewCtx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = viewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    viewCtx.current = ctx;

    const img = new Image();
    img.onload = () => {
      const x = size;
      const y = size;
      ctx.drawImage(img, x, y, size, size);
    };
    img.src = dataURL;
  }, [dataURL]);

  return { viewCanvasRef, viewCtx };
};
