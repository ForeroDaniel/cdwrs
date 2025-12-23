function sumNoDuplicates(numList) {
  return numList
    .filter((num) => numList.indexOf(num) === numList.lastIndexOf(num))
    .reduce((accumulator, current) => accumulator + current, 0);
}
