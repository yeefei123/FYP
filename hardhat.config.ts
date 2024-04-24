import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();

const { API_URL, PRIVATE_KEY } = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepoila",
  networks: {
    sepoila: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};

export default config;
