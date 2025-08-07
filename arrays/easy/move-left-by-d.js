function moveLeftByD(arr, k) {
  const beforeK = arr.slice(0, k);
  const afterK = arr.slice(k, arr.length);
  return [...afterK, ...beforeK];
}

console.log(arr([1, 2, 3, 4, 5, 6], 3));
