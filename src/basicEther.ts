import { ethers } from "ethers";

const getEth = () => {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("get metamask");
  }
  return eth;
};

const hasAccounts = async () => {
  const eth = getEth();
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];

  return accounts && accounts.length;
};

const requestAccounts = async () => {
  const eth = getEth();
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts && accounts.length;
};

export const runChecks = async () => {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error("no accounts possibly found");
  }

  const hello = new ethers.Contract(
    "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    ["function hello() public pure returns (string memory)"],
    new ethers.providers.Web3Provider(getEth())
  );

  return await hello.hello();
};
