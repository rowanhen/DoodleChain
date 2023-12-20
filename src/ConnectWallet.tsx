import { useAccounts } from "./basic-eth-helpers/useAccounts";
import { useEthereum } from "./basic-eth-helpers/useEthereum";
import { useConnectWallet } from "./basic-eth-helpers/useWalletConnect";

export const ConnectWallet = () => {
  const ethereum = useEthereum();
  const accounts = useAccounts();
  const { isConnected, connectWallet } = useConnectWallet();

  return (
    <div>
      {ethereum && !isConnected && (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      {isConnected && <div>Connected Account: {accounts[0]}</div>}
    </div>
  );
};
