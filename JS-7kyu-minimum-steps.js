function minimumSteps(numbers, value){
   return numbers.sort((a,b)=>a-b).filter((e,i)=> (value=value-e) > 0).length;
}
