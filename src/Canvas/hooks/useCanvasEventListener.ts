import { Contract } from "ethers";
import { useEffect, useState } from "react";
import { useLocalStorageNonString } from "../../hooks/useNonStringLocalStorage";

export type SavedCanvasEvent = {
  id: string;
  canvas: string;
  timestamp: string;
  user: string;
};

export const useCanvasEventListener = (contract: Contract | null) => {
  const [canvasSaved, setCanvasSaved] = useState(false);
  const [recentlySaved, setRecentlySaved] = useLocalStorageNonString(
    "recentlySaved",
    [] as unknown as SavedCanvasEvent[]
  );

  useEffect(() => {
    if (!contract) return;

    const onCanvasSaved = (event: SavedCanvasEvent) => {
      console.log(
        `Canvas ${event.id} saved by ${event.user} at ${event.timestamp}, with canvasUrl: ${event.canvas}`
      );
      if (!recentlySaved.some((e) => e.id === event.id)) {
        setRecentlySaved([...recentlySaved, event]);
        setCanvasSaved(true);
        return;
      }
      return;
    };

    contract.on(
      contract.filters.CanvasSaved(),
      //TODO: see if theres a better way to get event data
      //kind of sucks having to individually specify args in correct order, lots of room for error here
      (canvasId, canvasData, timestamp, user) => {
        const event = {
          id: canvasId.toString(),
          canvas: canvasData,
          timestamp: timestamp.toString(),
          user,
        };
        onCanvasSaved(event);
      }
    );
  }, [contract]);

  useEffect(() => {
    if (!canvasSaved) return;

    setTimeout(() => setCanvasSaved(false), 200);
  }, [canvasSaved]);

  return { canvasSaved, recentlySaved };
};
