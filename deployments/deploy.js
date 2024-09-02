require('dotenv').config();
const hre = require("hardhat");

async function main() {
    // Compile the contracts (optional if already compiled)
    await hre.run('compile');

    const { ethers } = hre;

    // Get the contract to deploy
    const CampaignFactory = await ethers.getContractFactory("CampaignFactory");

    console.log("Deploying CampaignFactory...");

    // Deploy the CampaignFactory contract
    const campaignFactory = await CampaignFactory.deploy();

    await campaignFactory.deployed();

    console.log("CampaignFactory deployed to:", campaignFactory.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
