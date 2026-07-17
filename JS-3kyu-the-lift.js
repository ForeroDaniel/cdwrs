const theLift = (queues, capacity, lift = [], floor = 0, result = [0], up = true) => {
  
  if ( [lift, ...queues].every( arr => !arr.length ) ) return [...result, 0].filter( (floor, idx, arr) => floor !== arr[idx -1 ] );
  
  const shallLiftStop = lift.some( person => person === floor) || queues[floor].some( person => up ? person > floor : person < floor ); 

  lift = lift.filter( person => person !== floor );
  let freeSpace = capacity - lift.length, offset = 0;
  [...queues[floor]].forEach( (person, idx) => ( up ? person > floor : person < floor ) 
                              && ( freeSpace-- > 0 ) && lift.push( queues[floor].splice( idx - offset++, 1)[0] ) );
  
  shallLiftStop && result.push(floor);
  ( ( floor = floor + up * 2 - 1 ) - queues.length + 1 ) * floor || ( up = !up );
  
  return theLift (queues, capacity, lift, floor, result, up);
  
}
