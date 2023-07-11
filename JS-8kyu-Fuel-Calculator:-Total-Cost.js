function fuelPrice(litres, pricePerLitre) {
  switch (Math.floor(litres/2)) {
      case 0: return litres * pricePerLitre;
      case 1: return Number((litres * pricePerLitre - litres * 0.05).toFixed(2));
      case 2: return Number((litres * pricePerLitre - litres * 0.10).toFixed(2));
      case 3: return Number((litres * pricePerLitre - litres * 0.15).toFixed(2));
      case 4: return Number((litres * pricePerLitre - litres * 0.20).toFixed(2));
      default: return Number((litres * pricePerLitre - litres * 0.25).toFixed(2));
  }
}
