const reverse = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log(reverse(123))