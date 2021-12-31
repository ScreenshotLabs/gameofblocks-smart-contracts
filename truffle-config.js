const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const mnemonic = process.env.MNEMONIC;
const infuraKey = process.env.INFURA_API_KEY;
const polygonScanKey = process.env.POLYGON_API_KEY;
const etherscanKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  ens: {
    enabled: true,
  },
  networks: {
    maticlive: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mainnet.infura.io/v3/${infuraKey}`
        ),
      network_id: 137,
      gas: 600000,
      gasPrice: 100000000000,
      // timeoutBlocks: 200,
      skipDryRun: true,
    },

    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.infura.io/v3/${infuraKey}`
        ),
      network_id: 80001,
      gas: 6000000,
      gasPrice: 10000000000,
    },

    live: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          `https://mainnet.infura.io/v3/${infuraKey}`
        );
      },
      network_id: "1",
      gasLimit: 5000000, // default value: 6721975
      gasPrice: 40000000000,
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          `https://goerli.infura.io/v3/${infuraKey}`
        );
      },
      network_id: "5", // eslint-disable-line camelcase
      gasPrice: 30000000000,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        );
      },
      gasPrice: 30000000000,
      network_id: "4",
    },
    cldev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          `https://kovan.infura.io/v3/${etherscanApiKey}`
        );
      },
      network_id: "42",
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.2",
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanKey,
    polygonscan: polygonScanKey,
  },
};
