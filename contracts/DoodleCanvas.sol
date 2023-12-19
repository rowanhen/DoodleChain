// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoodleCanvasV1 {
    uint256[] public canvases;

    event CanvasSaved(uint256 indexed canvasId, uint256 canvas);

    // Function to save a canvas
    function saveCanvas(uint256 canvas) public {
        canvases.push(canvas);
        emit CanvasSaved(canvases.length - 1, canvas);
    }

    // Function to get the total number of canvases
    function getTotalCanvases() public view returns (uint256) {
        return canvases.length;
    }
}
