var humanYearsCatYearsDogYears = function(humanYears) {
  let years = [1,15,15];
  if (humanYears > 1) years = [2,24,24];
  if (humanYears > 2) years = [humanYears,24+((humanYears-2)*4),24+((humanYears-2)*5)]     
  return years;
}
