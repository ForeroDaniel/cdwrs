function pointsPer48(ppg, mpg) {
  return ppg === 0 || mpg === 0 ? 0 : Number(((ppg/mpg)*48).toFixed(1)) ;
}
