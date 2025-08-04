/**
 * Creates a frequency array and prints frequencies of elements to check
 * @param {number} n - Size of the frequency array
 * @param {number[]} frequencyArr - Array of elements to count
 * @param {number[]} arrToCheck - Array of elements to check frequencies for
 */
function basicHash(n, frequencyArr, arrToCheck) {
  let arr = Array.from({ length: n }, () => 0);

  for (const element of frequencyArr) {
    arr[element] += 1;
  }

  for (const element of arrToCheck) {
    console.log(arr[element]);
  }
}

/**
 * Counts the frequency of a specific element in an array using HashMap
 * @param {any[]} arr - Input array
 * @param {any} el - Element to count frequency for
 * @returns {number} Frequency of the element
 */
function countFrequency(arr, el) {
  const hashMap = new Map();
  for (let item of arr) {
    if (hashMap.has(item)) {
      const frequency = hashMap.get(item);
      hashMap.set(item, frequency + 1);
    } else {
      hashMap.set(item, 1);
    }
  }

  return hashMap.get(el);
}

/**
 * Finds elements with lowest and highest frequencies in an array
 * @param {any[]} arr - Input array
 * @returns {any[]} Array containing [lowest frequency element, highest frequency element]
 */
function countHighAndLowFrequency(arr) {
  const hashMap = new Map();

  let low = Number.MAX_SAFE_INTEGER;
  let lowEl;
  let high = Number.MIN_SAFE_INTEGER;
  let highEl;

  for (let item of arr) {
    if (hashMap.has(item)) {
      const frequency = hashMap.get(item);
      hashMap.set(item, frequency + 1);
    } else {
      hashMap.set(item, 1);
    }
  }

  for (const [key, value] of hashMap.entries()) {
    if (value < low) {
      low = value;
      lowEl = key;
    }
    if (value > high) {
      high = value;
      highEl = key;
    }
  }
  return [lowEl, highEl];
}
