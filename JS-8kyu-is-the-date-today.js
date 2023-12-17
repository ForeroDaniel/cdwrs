function isToday(date) {
  const currentDate = new Date();
  return date.toDateString() === currentDate.toDateString();
}
