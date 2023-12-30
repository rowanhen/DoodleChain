// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoodleCanvasDataUrl {
    string[] public canvases;

    event CanvasSaved(
        uint256 indexed canvasId,
        string canvasData,
        uint256 timestamp,
        address indexed user
    );

    // Function to save a canvas as a Base64 string
    function saveCanvas(string memory canvasData) public {
        canvases.push(canvasData);
        emit CanvasSaved(
            canvases.length - 1,
            canvasData,
            block.timestamp,
            msg.sender
        );
    }

    // Function to get the total number of canvases
    function getTotalCanvases() public view returns (uint256) {
        return canvases.length;
    }

    // Function to get a specific canvas data by ID
    function getCanvas(uint256 canvasId) public view returns (string memory) {
        require(canvasId < canvases.length, "Canvas does not exist");
        return canvases[canvasId];
    }

    // Function to get all canvas data
    function getAllCanvases() public view returns (string[] memory) {
        return canvases;
    }
}
