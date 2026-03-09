const stalinSort = arr => {
  for (let i = 1; i < arr.length; i++)
    arr[i] >= arr[i - 1] || arr.splice(i--, 1);
}
