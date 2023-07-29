function solution(x) {
    let eachSum = 0;
    for(num of x.toString()){
        eachSum+=Number(num)
    }
        return x%eachSum===0;
}