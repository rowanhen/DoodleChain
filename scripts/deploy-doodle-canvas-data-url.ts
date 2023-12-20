import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const DoodleCanvasDataUrl = await ethers.getContractFactory(
    "DoodleCanvasDataUrl"
  );
  const doodleCanvasDataUrl = await DoodleCanvasDataUrl.deploy();
  await doodleCanvasDataUrl.deployed();

  return doodleCanvasDataUrl;
};

deploy();
