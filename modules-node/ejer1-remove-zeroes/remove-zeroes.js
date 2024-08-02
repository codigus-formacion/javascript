module.exports = function(nums) {
    let noZeroes = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            noZeroes.push(nums[i]);
        }
    }
    return noZeroes;
}
