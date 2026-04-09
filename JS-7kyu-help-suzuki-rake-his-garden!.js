const rakeGarden = garden => 
  garden
    .split(' ')
    .map(item => item === 'rock' ? 'rock' : 'gravel')
    .join(' ')
