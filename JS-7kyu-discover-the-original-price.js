function discoverOriginalPrice(discountedPrice, salePercentage) {
  const decimalPercentage = salePercentage / 100;

  const originalPrice = discountedPrice / (1 - decimalPercentage);

  return parseFloat(originalPrice.toFixed(2));
}
