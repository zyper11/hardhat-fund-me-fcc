// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {

    function getPrice(AggregatorV3Interface priceFeed) internal view returns (uint256) {
        // ABI
        (,int256 answer,,,) = priceFeed.latestRoundData();
        // ETH in terms of USD
        // 3000.00000000

        return uint256(answer * 1e10); // 1**10 == 10000000000
    }

    function getConversionRate(uint256 ethAmount, AggregatorV3Interface priceFeed) internal view returns (uint256) {
        uint256 ethPrice = getPrice(priceFeed);
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }

}