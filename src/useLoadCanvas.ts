import { useEffect, useRef } from "react";
import { calculateCanvasHeight } from "./helpers";

export const useLoadCanvases = (dataURLs: string[]) => {
  const viewCanvasRef = useRef<HTMLCanvasElement>(null);
  const viewCtx = useRef<CanvasRenderingContext2D | null>(null);

  const size = 16; // Size of each small canvas

  useEffect(() => {
    const canvas = viewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    ctx.lineCap = "square";
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.globalCompositeOperation = "source-over";
    viewCtx.current = ctx;

    dataURLs.forEach((dataUrl, index) => {
      const img = new Image();
      img.onload = () => {
        const x = (index % calculateCanvasHeight(index)) * size; // Adjust these calculations based on your layout
        const y = Math.floor(index / calculateCanvasHeight(index)) * size;
        ctx.drawImage(img, x, y, size, size);
      };
      img.src = dataUrl;
    });
  }, [dataURLs]);

  return { viewCanvasRef, viewCtx };
};
