const power = (x, y) => {
    let count = 1;
    if (y <= 0) {
      return 1;
    } else {
      while (y > 0) {
          y--;
      count *= x;
    }
    return count;
    }
  };

  console.log(power(2,1))