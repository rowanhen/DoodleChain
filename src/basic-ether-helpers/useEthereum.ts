import { MetaMaskInpageProvider } from "@metamask/providers";
import { useEffect, useState } from "react";

export const useEthereum = () => {
  const [ethereum, setEthereum] = useState<null | MetaMaskInpageProvider>(null);

  useEffect(() => {
    const eth = window.ethereum;
    if (!eth) {
      console.error("Ethereum object not found. Install MetaMask.");
    } else {
      setEthereum(eth);
    }
  }, []);

  return ethereum;
};
