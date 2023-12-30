import { Contract } from "ethers";
import { useEffect, useState } from "react";

export const useCanvasFetcher = (contract: Contract | null) => {
  const [canvases, setCanvases] = useState([]);

  const getSavedCanvases = async () => {
    if (!contract) return;
    const fetchedCanvases = await contract.getAllCanvases();
    setCanvases(fetchedCanvases);
  };

  useEffect(() => {
    if (!contract) return;

    getSavedCanvases();
  }, [contract]);

  return { canvases, getSavedCanvases };
};
