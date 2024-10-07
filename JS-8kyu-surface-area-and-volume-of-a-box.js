function getSize(width, height, depth){
  return [2 * (width * depth + height * depth + width * height), width * height * depth]
}
