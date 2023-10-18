// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

// Answer

/*
 * Create the function factorial here
 */

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
    }
  }