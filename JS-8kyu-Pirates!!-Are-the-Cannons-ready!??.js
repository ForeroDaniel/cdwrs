const cannonsReady = (gunners) => {
  for(let pirate in gunners){
    if(gunners[pirate] === 'aye') continue;
    else return 'Shiver me timbers!';
  }
  return 'Fire!';
}
