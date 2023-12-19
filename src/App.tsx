import Counter from "../artifacts/contracts/Counter.sol/Counter.json";
import { BasicCounter } from "./BasicCounter";
import { useContract } from "./basic-ether-helpers/useContract";

const App = () => {
  // const { canvasRef, startDrawing, endDrawing, draw } = useDrawCanvas();
  const counterContract = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
  const contract = useContract(counterContract, Counter.abi);

  console.log(contract);

  return (
    <>
      {/* <HeaderSideBar canvasRef={canvasRef} /> */}
      {/* <Canvas
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        endDrawing={endDrawing}
        draw={draw}
      /> */}
      <BasicCounter />
    </>
  );
};

export default App;
