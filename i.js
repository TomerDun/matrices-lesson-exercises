function printDups(arr) {  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        console.log(arr[j]);        
      }
    }
  }
}

function printDupsSorts(arr) {
  const sorted = arr.sort((a,b) => a-b);
  let printed = false;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      if (!printed) {
        console.log(sorted[i]);
        printed = true;
      }
      else {
        printed = false;
      }      
    }
  }
}

function twoSum(arr, target) {
  const sorted = arr.sort((a,b) => a -b);
  let left = 0;
  let right = sorted.length - 1;

  while (right > left) {
    let sum = sorted[left] + sorted[right];
    if (sum === target) return true;
    else if (sum > target) right --;
    else left ++;
  }
  return false;
}

function twoSumBrute(arr, target) {
  for (let i in arr) {
    for (let j in arr) {
      if (i !== j && arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

function twoSumSet(arr, target) {
  const arrSet = new Set(arr);

  for (let item of arrSet) {
    if (arrSet.has(target - item)) return true
  }
  return false;
}

function dupesMap(arr) {
  const s = new Set();
  for (let num of arr) {
    if (s.has(num)) console.log(num);
    s.add(num);    
  }  
}

console.log(twoSumBrute([1,2,4,5,3], 7));
console.log(twoSumBrute([1,2,4,5,3], 12));

console.log(twoSum([1,2,4,5,3], 7));
console.log(twoSum([1,2,4,5,3], 12));
console.log(twoSum([2,7,11,15], 17));
console.log(twoSum([2,7,11,15], 177));


console.log(twoSumSet([1,2,4,5,3], 7));
console.log(twoSumSet([1,2,4,5,3], 12));
console.log(twoSumSet([2,7,11,15], 17));
console.log(twoSumSet([2,7,11,15], 177));

dupesMap([1,2,4,4,1,2,5,4])



