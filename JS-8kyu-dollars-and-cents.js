function formatMoney(amount){
  if(Number.isInteger(amount)) return `$${amount}.00`;
  
  const parts = amount.toString().split('.');
  
  return `$${parts[1].length === 2 ? amount : amount + '0'}`
}
