const twistedSum = n => [...Array(n+1).keys()].join('').split('').reduce((a,c)=> a + +c, 0)
