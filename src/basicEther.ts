export const getEth = () => {
  //@ts-ignore
  const eth = window.ethereum;
  if (!eth) {
    throw new Error("get metamask");
  }
  return eth;
};

export const hasAccounts = async () => {
  const eth = getEth();
  const accounts = (await eth.request({ method: "eth_accounts" })) as string[];

  return accounts && accounts.length;
};

export const requestAccounts = async () => {
  const eth = getEth();
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts && accounts.length;
};
