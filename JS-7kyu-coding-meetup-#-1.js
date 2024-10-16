function countDevelopers(list) {
  let count = 0;
  
  for(let developer of list){
    if(developer.continent === 'Europe' && developer.language === 'JavaScript') ++count
  }
  
  return count;
}
