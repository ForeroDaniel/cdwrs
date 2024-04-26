function deleteNth(arr,n){
  const occurrences = {};

  const resultList = arr.filter((num) => {
    occurrences[num] = (occurrences[num] || 0) + 1;
    return occurrences[num] <= n;
  });

  return resultList;
}
