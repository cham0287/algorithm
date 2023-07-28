function solution(nums) {
    const choice = Math.floor(nums.length/2)
    const options = [...new Set(nums)].length;
    return Math.min(choice,options);
}