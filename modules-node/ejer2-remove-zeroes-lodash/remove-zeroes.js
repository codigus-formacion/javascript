let lodash = require('lodash');
function removeZeroes(nums) {
    return lodash.without(nums, 0);
}

module.exports = removeZeroes;