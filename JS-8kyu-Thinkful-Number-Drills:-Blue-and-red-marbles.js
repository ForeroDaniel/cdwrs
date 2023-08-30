function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / (blueStart + redStart - bluePulled - redPulled)
}
