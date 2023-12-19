import { useEffect, useState } from "react";
import { useEthereum } from "./useEthereum";

export const useConnectWallet = () => {
  const ethereum = useEthereum();
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (!ethereum) return;

    try {
      const accounts = (await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      setIsConnected(accounts.length > 0);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, [ethereum]);

  return { isConnected, connectWallet };
};
