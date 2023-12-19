import { useEffect, useState } from "react";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";
import { useContract } from "./basic-ether-helpers/useContract";

//BasicCounter making use of useContract, events, editing, and reading onchain data
export const BasicCounter = () => {
  const counterContract = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
  const contract = useContract(counterContract, Counter.abi);

  const [count, setCount] = useState();

  const incrementCount = async () => {
    if (!contract) return;
    await contract.count();
  };

  useEffect(() => {
    if (!contract) return;

    //cant believe this actually works its nuts
    contract.on(contract.filters.CounterInc(), (count) => {
      setCount(count);
    });
  }, [contract]);

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementCount}>Increase Count</button>{" "}
    </>
  );
};
