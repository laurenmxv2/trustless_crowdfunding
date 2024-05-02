const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CrowdfundingCampaignModule", (m) => {
    const goalAmount = "10000000000000000000"; // 10 Ether in Wei
    const duration = 2592000; // 30 days in seconds

    // Deploy the CrowdfundingCampaign contract
    const campaign = m.contract("CrowdfundingCampaign", [goalAmount, duration], { gasLimit: 8000000 });

    return { campaign };
});
