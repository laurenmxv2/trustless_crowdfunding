import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { useAccount } from "wagmi";

const HomePage = () => {
  const { address, isConnected } = useAccount();

  return (
    <div className="home">
      <h1>Welcome to the Trustless Crowdfunding Platform</h1>
      {isConnected ? (
        <p>Connected as: {address}</p>
      ) : (
        <ConnectWalletButton />
      )}
    </div>
  );
};

export default HomePage;
