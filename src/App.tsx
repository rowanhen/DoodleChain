import styled from "styled-components";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";
import { Canvas } from "./Canvas";
import { HeaderSideBar } from "./HeaderSideBar";
import { useContract } from "./basic-eth-helpers/useContract";
import { useDrawCanvas } from "./useDrawCanvas";

const App = () => {
  const { canvasRef, startDrawing, endDrawing, draw } = useDrawCanvas();
  const counterContract = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
  const contract = useContract(counterContract, Counter.abi);

  console.log(contract);

  return (
    <AppContainer>
      <HeaderSideBar canvasRef={canvasRef} />
      <Canvas
        canvasRef={canvasRef}
        startDrawing={startDrawing}
        endDrawing={endDrawing}
        draw={draw}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 24px;
`;

export default App;
