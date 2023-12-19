import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const DoodleCanvas = await ethers.getContractFactory("DoodleCanvas");
  const doodleCanvas = await DoodleCanvas.deploy();
  await doodleCanvas.deployed();

  return doodleCanvas;
};

// const saveCanvas = async (doodleCanvas) => {
//   await doodleCanvas.saveCanvas();
//   console.log("No. of Canvas", await doodleCanvas.getTotalCanvases());
// };

deploy();
