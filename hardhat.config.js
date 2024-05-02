require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
            chainId: 1337
        },
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            gas: 8000000,  // Increase gas limit
        }
    }
};