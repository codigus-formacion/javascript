let nums = [1, 2, 3, 4];
let numsAux = nums;

numsAux[0] = -1;

console.log(nums[0] === -1) // true
console.log(numsAux === nums) // true