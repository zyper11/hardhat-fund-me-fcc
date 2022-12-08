import { ethers, getNamedAccounts } from "hardhat";
import { FundMe } from "../typechain-types";

async function main() {
    const { deployer } = await getNamedAccounts();
    const fundMe: FundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding contract...");
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    });

    await transactionResponse.wait(1);
    console.log("Funded!");
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
