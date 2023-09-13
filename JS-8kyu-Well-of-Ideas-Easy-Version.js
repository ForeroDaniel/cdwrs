function well(x){
  if (x.some(idea => idea === 'good')) {
    let goodIdeas = x.filter(idea => idea === 'good');
    if (goodIdeas.length > 2) return 'I smell a series!';
    else return 'Publish!';
  } else return 'Fail!';
}
