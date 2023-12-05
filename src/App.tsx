import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";
import { getEth, hasAccounts, requestAccounts } from "./basicEther";

const App = () => {
  const [count, setCount] = useState();
  const [contract, setContract] = useState<ethers.Contract | null>();

  useEffect(() => {
    const initContract = async () => {
      if (!(await hasAccounts()) && !(await requestAccounts())) {
        throw new Error("no accounts possibly found");
      }

      const contract = new ethers.Contract(
        "0x610178da211fef7d417bc0e6fed39f05609ad788",
        Counter.abi,
        new ethers.providers.Web3Provider(getEth()).getSigner()
      );

      const initialCount = await contract.getCounter();
      setCount(initialCount);

      contract.on(contract.filters.CounterInc(), function (count) {
        setCount(count);
      });

      setContract(contract);
    };

    initContract();
  }, []);

  const incrementCount = async () => {
    if (!contract) return;
    await contract.count();
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementCount}>Increase Count</button>{" "}
    </>
  );
};

export default App;
