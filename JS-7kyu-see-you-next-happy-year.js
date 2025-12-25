const nextHappyYear = year => new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;
