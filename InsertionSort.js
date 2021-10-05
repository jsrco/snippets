const inerstionSort = (arr) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let target = 0
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      target = j
    }
    arr[target + 1] = currentVal;
  }
  return arr;
};

console.log(inerstionSort([2,3,45,23,5,6,23,46]))
