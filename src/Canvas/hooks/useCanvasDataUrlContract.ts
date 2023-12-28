import { useEffect, useState } from "react";
import DoodleCanvasDataUrl from "../../../artifacts/contracts/DoodleCanvasDataUrl.sol/DoodleCanvasDataUrl.json";
import { useContract } from "../../basic-eth-helpers/useContract";

const doodleCanvasDataUrlContract =
  "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const useCanvasDataUrlContract = () => {
  const [canvases, setCanvases] = useState<string[]>([]);
  //TODO: see if theres a way to generically check for these events
  const [canvasSaved, setCanvasSaved] = useState(false);
  //TODO: see if theres a way to generically check for these events
  const [saving, setSaving] = useState(false);
  const contract = useContract(
    doodleCanvasDataUrlContract,
    DoodleCanvasDataUrl.abi
  );

  const saveCurrentCanvas = async (canvas: string) => {
    if (!contract) return;
    setSaving(true);
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
      setSaving(false);
      setCanvasSaved(true);
    });
  }, [contract]);

  useEffect(() => {
    if (!canvasSaved) return;

    setTimeout(() => {
      setCanvasSaved(false);
    }, 200);
  }, [canvasSaved]);

  useEffect(() => {
    if (!canvasSaved) return;

    getSavedCanvases();
  }, [canvasSaved]);

  return { canvases, canvasSaved, saving, setSaving, saveCurrentCanvas };
};
