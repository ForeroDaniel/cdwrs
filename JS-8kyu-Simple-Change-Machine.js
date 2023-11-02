function changeMe(moneyIn){
 let x = '20p ' ;
 switch(moneyIn){
     case '£5': return x.repeat(25).trimEnd();
     case '£2': return x.repeat(10).trimEnd();
     case '£1': return x.repeat(5).trimEnd();
     case '50p': return x.repeat(2).concat('10p');
     case '20p': return '10p 10p';
     default: return moneyIn;
 }
}
