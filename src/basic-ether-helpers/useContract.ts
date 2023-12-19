import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccounts } from "./useAccounts";
import { useEthereum } from "./useEthereum";

export const useContract = (address: string, abi: ethers.ContractInterface) => {
  const ethereum = useEthereum();
  const accounts = useAccounts();
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    const initContract = async () => {
      if (!ethereum || accounts.length === 0) {
        console.error("Ethereum not found or no accounts available.");
        return;
      }

      try {
        const provider = new ethers.providers.Web3Provider(
          ethereum as unknown as ethers.providers.ExternalProvider
        );
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(address, abi, signer);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing contract:", error);
      }
    };

    initContract();
  }, [ethereum, accounts, address, abi]);

  return contract;
};
