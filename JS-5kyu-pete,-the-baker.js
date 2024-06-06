function cakes(recipe, available) {
  let count = [];
  for (let ingredient in recipe){
    if (!available[ingredient] || available[ingredient] < recipe[ingredient]){
      return 0
    } else count.push(Math.floor(available[ingredient] / recipe[ingredient]))
  }
  return Math.min(...count);
}
