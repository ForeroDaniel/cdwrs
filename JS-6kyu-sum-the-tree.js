function sumTheTreeValues(root) {
  return !root ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}
