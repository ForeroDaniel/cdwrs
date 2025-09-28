function maxGap (numbers){
 let num = numbers.sort((a,b) => a - b)
 let sum = num[1] - num[0]
 for(i=0; i < num.length; i++){
    if(num[i+1] - num[i] > sum){
      sum = num[i+1] - num[i]
    }
  }
 return sum
}
