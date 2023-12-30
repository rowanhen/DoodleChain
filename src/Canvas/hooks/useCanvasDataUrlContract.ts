import DoodleCanvasDataUrl from "../../../artifacts/contracts/DoodleCanvasDataUrl.sol/DoodleCanvasDataUrl.json";
import { useContract } from "../../basic-eth-helpers/useContract";

const doodleCanvasDataUrlContract =
  "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const useCanvasDataUrlContract = () => {
  const contract = useContract(
    doodleCanvasDataUrlContract,
    DoodleCanvasDataUrl.abi
  );

  return contract;
};
