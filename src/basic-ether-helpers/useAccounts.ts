import { useEffect, useState } from "react";
import { useEthereum } from "./useEthereum";

export const useAccounts = () => {
  const ethereum = useEthereum();
  const [accounts, setAccounts] = useState<string[]>([]);

  const getAccounts = async () => {
    if (!ethereum) return;

    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      setAccounts(accounts as string[]);
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
    }
  };

  useEffect(() => {
    getAccounts();
  }, [ethereum]);

  return accounts;
};
