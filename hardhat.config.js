/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    BSCT: {
      chainId: 97,
      url:"https://bsc-testnet.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
