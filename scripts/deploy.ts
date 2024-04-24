import { ethers } from "hardhat";

async function main() {
    const contract = await ethers.getContractFactory("FYP");
    const deployed = await contract.deploy();

    console.log(deployed);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})