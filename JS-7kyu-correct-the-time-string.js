function timeCorrect(timestring) {
  if (!timestring)
    return timestring
    
  if (!/^(\d\d:){2}\d\d$/.test(timestring))
    return null
    
  return (new Date(0,0,0,...timestring.split(':'))).toString().slice(16,24)
}
