function bigToSmall(arr){
  return [...arr].sort((a, b)=>b-a).join('>');
}
