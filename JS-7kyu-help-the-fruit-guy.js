function removeRotten(bagOfFruits){
  if (!bagOfFruits) return [];
    return bagOfFruits.map(fruit => {
        if (fruit.startsWith("rotten")) {
            return fruit.slice(6).toLowerCase();
        } else {
            return fruit;
        }
    });
}
