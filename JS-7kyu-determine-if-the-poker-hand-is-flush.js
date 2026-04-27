function isFlush(cards) {
  return cards
    .every(card => card.slice(-1) === cards[0].slice(-1));
}
