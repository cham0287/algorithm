function solution(nums) {
    const nonDuplicated = [...new Set(nums)].length
    const maximum = Number(nums.length)/2;

    return Math.min(nonDuplicated,maximum)
}
