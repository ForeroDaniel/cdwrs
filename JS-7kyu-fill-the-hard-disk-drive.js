function save(sizes, hd) {
  let savedFiles = 0;
  let usedSpace = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i] === 0) {
      savedFiles++;
    } else if (usedSpace + sizes[i] <= hd) {
      usedSpace += sizes[i];
      savedFiles++;
    } else {
      break;
    }
  }

  return savedFiles;
}
