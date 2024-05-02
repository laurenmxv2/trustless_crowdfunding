import { useConnect, useAccount } from 'wagmi';

export const ConnectWalletButton = () => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  return (
    <button onClick={() => connect(connectors[0])}>
      {isConnected ? 'Disconnect' : 'Connect Wallet'}
    </button>
  );
};
