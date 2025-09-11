const splitInParts = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');
