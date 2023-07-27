function  calculateAge(phillip, year) {
  if (phillip === year) return "You were born this very year!";
  if (phillip < year) {
    if (year - phillip === 1) return "You are 1 year old.";
    else return `You are ${year - phillip} years old.`;
  }
  if (phillip > year) {
    if (phillip - year === 1) return "You will be born in 1 year.";
    else return `You will be born in ${phillip - year} years.`;
  }
}
