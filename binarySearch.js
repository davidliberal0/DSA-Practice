// This program completes the binary search algorithm
// In order to perform a binary search,
// the array must already be sorted

// define an array of numbers
const nums = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];

let target = 17;

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

// if target not found
console.log("Target value not found in array");
return -1;
