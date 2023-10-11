// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// define an array of numbers
const nums = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];

let target = 14;

// varibles to track
let startIndex = 0;
let middleIndex;
let endIndex = nums.length - 1; // this gives us the final index of the array

// loop for looping through the list
// the start index must never be equal or pass the endIndex
while (startIndex <= endIndex) {
  // initialize the middle index
  middleIndex = Math.floor((startIndex + endIndex) / 2);

  // Compare the middle target for each match or condition

  if (target === nums[middleIndex]) {
    console.log("Target was found at index: " + middleIndex);

    return middleIndex;
  } else if (target < nums[middleIndex]) {
    console.log("Searching the left side of the array");
    endIndex = middleIndex - 1;
  } else {
    console.log("Searching the right side of the array");
    startIndex = middleIndex + 1;
  }
}

// Solution explanation: when a particular item is not found, the loop terminates.
// The final comparison within the loop is two items. Consider this, in order for
// the loop to terminate, the startIndex must pass the endIndex. On the last iteration
// the becomes the startIndex becomes the value is floored   --> ( 1 + 2) / 2 = 1. This
// means that our target is greater than the value at the middle index, beacuse of this we
// are going to add one to the startIndex. Therefore, we can return the startIndex as the
// insertion index.
