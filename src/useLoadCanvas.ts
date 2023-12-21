import { useEffect, useRef } from "react";
import { calculateCanvasHeight } from "./helpers";

export const useLoadCanvases = (dataURLs: string[], size: number) => {
  const viewCanvasRef = useRef<HTMLCanvasElement>(null);
  const viewCtx = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = viewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;
    viewCtx.current = ctx;

    const totalSize = calculateCanvasHeight(dataURLs.length);

    dataURLs.forEach((dataUrl, index) => {
      const img = new Image();
      img.onload = () => {
        const x = (index % totalSize) * size; // Adjust these calculations based on your layout
        const y = Math.floor(index / totalSize) * size;
        ctx.drawImage(img, x, y, size, size);
      };
      img.src = dataUrl;
    });
  }, [dataURLs]);

  return { viewCanvasRef, viewCtx };
};
