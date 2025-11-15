function dotCalculator(equation) {
    const [leftDots, operator, rightDots] = equation.split(' ')
    const leftNum = leftDots.length
    const rightNum = rightDots.length
    let result = 0
    
    switch(operator){
      case '+': result = leftNum + rightNum;
        break;
      case '-': result = leftNum - rightNum;
        break; 
      case '*': result = leftNum * rightNum;
        break; 
      case '//': result = Math.floor(leftNum / rightNum); 
        break; 
    }

    return '.'.repeat(result)
}
