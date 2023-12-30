import { Contract } from "ethers";
import { useState } from "react";

export const useCanvasSaver = (contract: Contract | null) => {
  const [saving, setSaving] = useState(false);

  const saveCurrentCanvas = async (canvas: string) => {
    if (!contract) return;
    setSaving(true);
    await contract.saveCanvas(canvas);
  };

  return { saving, saveCurrentCanvas };
};
