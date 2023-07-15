function solution(A,B){
    var answer = 0;
    const arr1 = A.sort((a,b)=>a-b)
    const arr2 = B.sort((a,b)=>b-a)

    arr1.forEach((a1,index)=>{
        answer +=a1*arr2[index]
    })  

    return answer;
}