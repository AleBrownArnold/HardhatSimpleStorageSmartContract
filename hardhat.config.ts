
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    test: {
      url: process.env.NODE_IP,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};

export default config;
