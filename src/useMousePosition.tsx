import { useEffect, useState } from "react";

export const useMousePosition = (
  global: boolean = false
): [{ x: number; y: number }, (event: MouseEvent) => void] => {
  const [mouseCoords, setMouseCoords] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  const handleCursorMovement = (event: MouseEvent): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const rect = event.target.getBoundingClientRect();
    setMouseCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  useEffect(() => {
    if (global) {
      window.addEventListener("mousemove", handleCursorMovement);

      return () => {
        window.removeEventListener("mousemove", handleCursorMovement);
      };
    }
  }, [global]);

  return [mouseCoords, handleCursorMovement];
};
