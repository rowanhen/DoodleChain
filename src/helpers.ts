export function calculateCanvasHeight(dataUrlLength: number) {
  if (dataUrlLength === 0) {
    return 3;
  } else {
    // Calculate the square root, round up to the nearest integer, and make it odd
    let height = Math.ceil(Math.sqrt(dataUrlLength));
    height = height % 2 !== 0 ? height : height + 1;
    return Math.max(3, height);
  }
}
