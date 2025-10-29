function evenLast(numbers) {
  if (numbers.length === 0) return 0
  return numbers
    .filter((num, index) => index % 2 === 0 && num)
    .reduce((acc, num) => acc + num, 0) * numbers[numbers.length - 1]
}
