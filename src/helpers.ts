export function convertToBinary(imageData: ImageData) {
  let binaryData = "";
  for (let i = 0; i < imageData?.data?.length; i += 1) {
    // Assuming the data is black & white, you might just check the red channel
    const red = imageData?.data[i];
    // Append '1' or '0' depending on the color
    binaryData += red > 128 ? "1" : "0"; // Simplified example
  }
  return binaryData;
}

export function binaryToUint256(binaryString: string) {
  // Split the binary string into chunks of 256 bits and convert each to a BigInt
  const uint256Array = [];
  for (let i = 0; i < binaryString.length; i += 256) {
    const chunk = binaryString.substring(i, i + 256);
    uint256Array.push(BigInt("0b" + chunk));
  }
  return uint256Array;
}
