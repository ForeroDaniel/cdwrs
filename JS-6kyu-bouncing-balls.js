function bouncingBall(h,  bounce,  window) {
  let rebounding = 0
  if (h > 0 && bounce < 1 && bounce > 0  && window < h) {
    while (h > window){
      h = h * bounce
      rebounding = rebounding + 2
    }
    return --rebounding
  }
  return -1
}
