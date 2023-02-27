require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const API_URL = "https://polygon-mumbai.g.alchemy.com/v2/PshG4gkaT0l-1bGe6eNcMSKWtxKuJ_mv";
const PRIVATE_KEY = "-private-key-"
const PUBLIC_KEY = "0x58aA76C20fFcA2e38Cb7ed6fCfa5cdEeb20b7E63";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
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
