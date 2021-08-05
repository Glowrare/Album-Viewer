/**
 * Randomly select n number of element(s) from an Array to generate a new array with no duplicate element.
 * @param {Array} initArray initial array to randomly select n number of element(s) from.
 * @param {Number} n Number of element(s) to randomly select from initial array. n must not be greater that the length of the initial array
 * @returns Array of random n number of element(s) from initial array
 */
function getRandomItems(initArray, n) {
  let result = new Array(n),
    len = initArray.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = initArray[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export { getRandomItems };
