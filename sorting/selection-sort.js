function selectionSort(arr = []) {
  if (!arr.length) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) {
        low = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
  return arr;
}
