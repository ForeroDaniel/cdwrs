function findScreenHeight(width, ratio) {
  const [ratioWidth, ratioHeight] = ratio.split(':');
  const height = (width * ratioHeight) / ratioWidth;
  return `${width}x${height}`;
}
