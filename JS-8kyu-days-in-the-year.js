function yearDays(year){
  let days;
  year % 100 === 0 && year % 400 === 0 || year % 100 !== 0 && year % 4 === 0 ? days = '366' : days = '365';
  return `${year} has ${days} days`;
}
