/**
 * Problem Solving Approach
 * 
 * Understand the Problem
 * -restate the problem in own words
 * -what are the inputs 
 * -what are the outputs
 * -can the outputs be determined from the inputs
 * -how should I lable the important pieces of data that are a part of the problem
 *  
 * Explore Concrete Examples
 * -start with simple examples
 * -progress to more complex
 * -explore examples with empty inputs 
 * -explore examples with invalid inputs
 * 
 * Break It Down
 * -explicitly write down the steps you need to take
 * 
 * Solve Or Simplify
 * -try to solve and if you can't try to solve and easier part of the problem
 * 
 * Look Back and Refactor
 * -can you check the result
 * -can you derive the result differently 
 * -can you understand it at a glance
 * -can you use the result or method for another problem
 * -can you improve performance
 * -can you think of other ways of writing the code
 * -how have other people solved it
 */

/**
 * Frequency Counter - for comparing two arrays using an object profile
 * Mulitiple Pointers - two reference indexes that allow you to shift through a sorted array
 * Sliding Window - create a window that slides through the data of the array, + or - from it
 * Divide and Conquer - divide a data set into smaller chunks to search from
 */


let sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

let countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4]));