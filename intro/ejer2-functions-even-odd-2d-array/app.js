function separateNums(nums) {

    let even = [];
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            console.log('Even: ' + nums[i]);
            even.push(nums[i]);
        } else {
            console.log('Odd: ' + nums[i]);
            odd.push(nums[i]);
        }
    }

    return [even, odd];
}

console.log(separateNums([1, 2, 3, 4]));
console.log(separateNums([0, 0, 1, 1, 1]));