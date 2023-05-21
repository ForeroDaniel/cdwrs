function magNumber(info){
  let bullets, result;
  switch (info[0]) {
    case 'PT92':
      bullets = 17
      result = Math.ceil((info[1]*3)/bullets)
      break;
    case 'M4A1':
      bullets = 30
      result = Math.ceil((info[1]*3)/bullets)
      break;
    case 'M16A2':
      bullets = 30
      result = Math.ceil((info[1]*3)/bullets)
      break;
    case 'PSG1':
      bullets = 5
      result = Math.ceil((info[1]*3)/bullets)
      break;
  }
  return result
}
