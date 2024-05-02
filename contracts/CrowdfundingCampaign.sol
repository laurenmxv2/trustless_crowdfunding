// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrowdfundingCampaign {
    address public creator;
    uint public goal;
    uint public endTime;
    uint public totalContributed;
    mapping(address => uint) public contributions;

    constructor(uint _goal, uint _duration) {
        creator = msg.sender;
        goal = _goal;
        endTime = block.timestamp + _duration;
    }

    function contribute() external payable {
        require(block.timestamp < endTime, "Campaign has ended");
        contributions[msg.sender] += msg.value;
        totalContributed += msg.value;
    }

    function withdraw() external {
        require(msg.sender == creator, "Only creator can withdraw");
        require(totalContributed >= goal, "Goal not reached");
        require(block.timestamp >= endTime, "Campaign has not ended yet");

        payable(msg.sender).transfer(address(this).balance);
    }

    function refund() external {
        require(block.timestamp >= endTime, "Campaign has not ended yet");
        require(totalContributed < goal, "Goal has been reached");

        uint contributed = contributions[msg.sender];
        contributions[msg.sender] = 0;
        payable(msg.sender).transfer(contributed);
    }
}
