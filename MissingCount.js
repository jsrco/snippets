const missingCount = (arr) => {
  const set = new Set(arr);

  let i = 1;

  while (set.has(i)) {
    i++;
  }

  return i;
};
