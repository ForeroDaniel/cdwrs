var fact = [1];
while(fact.length<=25) fact.push(fact.length*fact[fact.length-1]);

function listPosition(word) {
  if (word.length==1) return 1;
  var w = word.split('').sort();
  var abc = Array.from(new Set(w));
  var equals = abc.map(x => w.filter(y => x==y).length).reduce((res,i) => res*fact[i], 1);
  return fact[word.length-1] / equals * w.indexOf(word[0]) + listPosition(word.slice(1));
}
