import { useEffect, useState } from "react";
import { runChecks } from "./basicEther";

const App = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchContractResults = async () => {
      const contractResult = await runChecks();
      if (contractResult) {
        setResult(contractResult);
      }
    };

    fetchContractResults();
  }, []);

  return <>{result}</>;
};

export default App;
