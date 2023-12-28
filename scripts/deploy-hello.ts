import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

const foo = async () => {
  const helloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await helloWorld.deploy();
  await hello.deployed();
  return hello;
};

const deploy = async () => {
  const hello = await foo();
  return hello;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const sayHello = async (hello) => {
  console.log("Say Hello:", await hello.hello());
};

deploy().then(sayHello);
