import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const deploy = async () => {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.deployed();

  return counter;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const count = async (counter) => {
  await counter.count();
  console.log("Counter", await counter.getCounter());
};

deploy().then(count);
