import DoodleCanvasDataUrl from "../../../artifacts/contracts/DoodleCanvasDataUrl.sol/DoodleCanvasDataUrl.json";
import { useContract } from "../../basic-eth-helpers/useContract";

const doodleCanvasDataUrlContract =
  "0x22f56EBE56B0664e9a4707E094f7231760Be3124";

export const useCanvasDataUrlContract = () => {
  const contract = useContract(
    doodleCanvasDataUrlContract,
    DoodleCanvasDataUrl.abi
  );

  return contract;
};
