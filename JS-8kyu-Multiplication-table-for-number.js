function multiTable(number) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
       result +=`${i} * ${number} = ${i * number}`
       if (i === 10) continue;
       result += '\n'
      }
  return result      
}
