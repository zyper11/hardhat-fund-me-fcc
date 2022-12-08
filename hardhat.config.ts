import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat";

const GEORLI_RPC_URL = process.env.GEORLI_RPC_URL! || "https://eth-georli";
const PRIVATE_KEY = process.env.PRIVATE_KEY! || "OxKey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY! || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY! || "key";

const config: HardhatUserConfig = {
    // solidity: "0.8.17",
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.6" }],
    },
    networks: {
        goerli: {
            url: GEORLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts: hardhat
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "PHP",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
};

export default config;
