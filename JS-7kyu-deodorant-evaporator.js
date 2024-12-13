function evaporator(content, evap_per_day, threshold){ 
  let currentContent = content;
  const thresholdValue = content * (threshold / 100);

  let days = 0;

  while (currentContent > thresholdValue) {
      currentContent -= currentContent * (evap_per_day / 100);
      days++;
  }

  return days;
}
