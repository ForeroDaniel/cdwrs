function openOrSenior(data){
  const output = [];
  for (let i of data) {
    output.push(`${i[0] > 54 && i[1] > 7 ? 'Senior' : 'Open'}`);
  }
  return output;
}
