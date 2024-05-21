function inArray(array1,array2){
  const r = [];
  for (let i = 0; i < array1.length; ++i){
    for (let e = 0; e < array2.length; ++e){
      if (array2[e].includes(array1[i])) r.push(array1[i]);
    }
  }
  return [...new Set(r)].sort()
}
