function accum(s) {
  const arr = s.split('');
	for(let i = 0 ; i < arr.length ; ++i){
    arr[i] = `${arr[i].toUpperCase()}${arr[i].toLowerCase().repeat(i)}`
  }
  return arr.join('-');
}
