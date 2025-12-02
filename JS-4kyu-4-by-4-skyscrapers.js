const CITIES = [];

const getRow = (city, index) => city[index];

const getColumn = (city, index) => city.map(row => row[index]);

const buildRecurrent = (city, i, j) => {
  if (i < 4 && j < 4) {
    const row = getRow(city, i);
    const column = getColumn(city, j);
    
    const options = [1, 2, 3, 4].filter(item => !(row.includes(item) || column.includes(item)));
    const nextI = i < 3 ? i+1 : 0;
    const nextJ = i < 3 ? j : j+1;
    
    options.forEach(option => {
      const copy = city.map(item => [...item]);
      copy[i][j] = option;
      buildRecurrent(copy, nextI, nextJ);
    });
  } else {
    CITIES.push(city);
  }
}

const getCities = () => {
  if (CITIES.length) return CITIES;
  
  const emptyCity = new Array(4).fill(0).map(i => new Array(4).fill(0));
  buildRecurrent(emptyCity, 0, 0);
  
  return CITIES;
}

const countVisible = (line) => {
  if (line[0] === 4) return 1;
  if (line[0] === 3) return 2;
  if (line[0] === 2) return line[1] === 4 ? 2 : line[1] === 3 ? 3 : line[2] === 4 ? 2 : 3;
  if (line[1] === 4) return 2;
  if (line[1] === 3) return 3;
  if (line[1] === 2) return line[2] === 4 ? 3 : 4;
}

const isValidLine = (line, clue) => clue > 0 ? countVisible(line) === clue : true;

const applyClues = ({ rows, columns }) => city => {
  for (let i = 0; i < 4; i += 1) {
    const row = getRow(city, i);
    const column = getColumn(city, i);
    
    if (!isValidLine(row, rows[i][0])) return false;
    if (!isValidLine(column, columns[i][0])) return false;
    if (!isValidLine([...row].reverse(), rows[i][1])) return false;
    if (!isValidLine([...column].reverse(), columns[i][1])) return false;
  }
  
  return true;
}

const solvePuzzle = cluesRaw => {
  const top = cluesRaw.slice(0, 4);
  const right = cluesRaw.slice(4, 8);
  const bottom = cluesRaw.slice(8, 12).reverse();
  const left = cluesRaw.slice(12,16).reverse();
  
  const columns = top.map((clue, i) => [clue, bottom[i]]);
  const rows = left.map((clue, i) => [clue, right[i]]);

  return getCities().filter(applyClues({ rows, columns })).pop();
}
