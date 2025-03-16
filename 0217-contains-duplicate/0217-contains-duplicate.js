/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let answer = false;
    const history ={}

    for (let i=0; i<nums.length; i++){
        if(history[nums[i]]){
            answer = true;
        } else {
            history[nums[i]] = true
        }
    }

    return answer
    
};