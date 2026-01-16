function evenOrOdd(str) {
  const sumByRemainder = (remainder) => {
    return str
      .split('')
      .filter(x => x % 2 === remainder)
      .reduce((acc, x) => acc + parseInt(x), 0);
  };

  const even = sumByRemainder(0);
  const odd = sumByRemainder(1);

  return even > odd ? "Even is greater than Odd" : odd > even ? "Odd is greater than Even" : "Even and Odd are the same";
}
