function chained(functions) {
  // Return a new function that will accept the initial input.
  return function(input) {
    // Use the `reduce` method to apply each function in the array sequentially.
    // The `reduce` method iterates over the `functions` array:
    // - `accumulator` (acc) starts with the `input` value.
    // - `currentFunction` (fn) is the function being processed in the current iteration.
    // In each step, `currentFunction` is called with the `accumulator`'s current value,
    // and its result becomes the new `accumulator` for the next iteration.
    return functions.reduce((acc, fn) => {
      return fn(acc);
    }, input); // The `input` is the initial value for the accumulator.
  };
}
