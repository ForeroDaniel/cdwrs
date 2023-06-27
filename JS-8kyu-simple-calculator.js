function calculator(a,b,sign){
   if (Number.isInteger(a) && Number.isInteger(b))
     switch (sign) {
     case '+': return a + b;
     case '-': return a - b;
     case '*': return a * b;
     case '/': return a / b;
   } return 'unknown value';
}
