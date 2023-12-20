import { useEffect, useState } from "react";
import DoodleCanvasDataUrl from "../artifacts/contracts/DoodleCanvasDataUrl.sol/DoodleCanvasDataUrl.json";
import { useContract } from "./basic-eth-helpers/useContract";

const doodleCanvasDataUrlContract =
  "0x8a791620dd6260079bf849dc5567adc3f2fdc318";

export const useCanvasDataUrlContract = () => {
  const [canvases, setCanvases] = useState<string[]>([]);
  const contract = useContract(
    doodleCanvasDataUrlContract,
    DoodleCanvasDataUrl.abi
  );

  const saveCurrentCanvas = async (canvas: string) => {
    if (!contract) return;
    await contract.saveCanvas(canvas);
  };

  const getSavedCanvases = async () => {
    if (!contract) return;
    const fetchedCanvases = await contract.getAllCanvases();
    console.log(fetchedCanvases, "fetchedCanvases");
    setCanvases(fetchedCanvases);
  };

  useEffect(() => {
    if (!contract) return;

    getSavedCanvases();

    contract.on(contract.filters.CanvasSaved(), (id, canvas: string) => {
      console.log(id, "eventCanvasId");
      console.log(canvas, "eventCanvas");
    });
  }, [contract]);

  return { canvases, saveCurrentCanvas };
};
