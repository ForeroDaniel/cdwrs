function billboard(name, price = 30){
  return name.split('').reduce( acc => acc + price, 0 )
} 
