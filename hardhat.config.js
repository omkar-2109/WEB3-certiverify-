require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const API_URL = "https://polygon-mumbai.infura.io/v3/35b5b5f38ace48d9a4db144f27c29ba0";
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;
  const PUBLIC_KEY = "0x58aA76C20fFcA2e38Cb7ed6fCfa5cdEeb20b7E63";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${privateKey}`]
    }
  },


  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}