import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const deploy = async (name, ...args) => {
  const Fallback = await ethers.getContractFactory(name);
  const fallback = await Fallback.deploy(...args);
  await fallback.deployed();

  console.log(fallback.address);

  return fallback;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const fallback = async () => {
  const a = await deploy("A");
  const b = await deploy("B", a.address);

  console.log("A", await a.getA());
  console.log("B", await b.getB());
  console.log("___________________");

  await a.setA(42);

  console.log("A", await a.getA());
  console.log("B", await b.getB());
  console.log("___________________");

  await b.setB(60);

  console.log("A", await a.getA());
  console.log("B", await b.getB());
  console.log("___________________");
};

fallback();
