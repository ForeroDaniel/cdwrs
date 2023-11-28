function none(arr, fun){
  return !arr.some(x=>fun(x))
}
