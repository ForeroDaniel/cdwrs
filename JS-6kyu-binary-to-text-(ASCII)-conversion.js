function binaryToString(binary) {
  return (binary.match(/.{1,8}/g) || [])
    .map(byte => String.fromCharCode(parseInt(byte, 2)))
    .join('');
}
