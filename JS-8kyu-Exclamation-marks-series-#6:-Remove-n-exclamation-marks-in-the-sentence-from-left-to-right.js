function remove(s,n){
  let string = s;
  for (let i = 0; i < n; ++i) string = string.replace('!' , '');
    return string;
}
