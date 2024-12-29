function converter (mpg) {
  const imperialGallonToLiters = 4.54609188; // 1 Imperial Gallon = 4.54609188 liters
  const mileToKilometers = 1.609344; // 1 Mile = 1.609344 kilometers

  // Convert mpg to kpl
  const kpl = (mpg * mileToKilometers) / imperialGallonToLiters;

  // Round off the result to two decimal points
  return parseFloat(kpl.toFixed(2));
}
