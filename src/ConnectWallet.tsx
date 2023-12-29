import styled from "styled-components";
import { useAccounts } from "./basic-eth-helpers/useAccounts";
import { useEthereum } from "./basic-eth-helpers/useEthereum";
import { useConnectWallet } from "./basic-eth-helpers/useWalletConnect";
import { GenericButton } from "./components/GenericButton";

export const ConnectWallet = () => {
  const ethereum = useEthereum();
  const accounts = useAccounts();
  const { isConnected, connectWallet } = useConnectWallet();

  return (
    <div>
      {ethereum && !isConnected && (
        <GenericButton onClick={connectWallet}>Connect Wallet</GenericButton>
      )}
      {isConnected && (
        <ConnectedAccount>Connected Account: {accounts[0]}</ConnectedAccount>
      )}
    </div>
  );
};

const ConnectedAccount = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
`;
