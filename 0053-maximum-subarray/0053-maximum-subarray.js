/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let globalMax = nums[0];
    let currentMax = nums[0];

    for (let i=1; i<nums.length; i++){
        const currentVal = nums[i]
        currentMax = Math.max(currentVal,currentMax+currentVal);
        globalMax = Math.max(globalMax,currentMax)
    }

    return globalMax
    
};