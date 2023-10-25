function periodIsLate(last, today, cycleLength) {
  const day = 24 * 60 * 60 * 1000;
  return (today - last) / day > cycleLength
}
