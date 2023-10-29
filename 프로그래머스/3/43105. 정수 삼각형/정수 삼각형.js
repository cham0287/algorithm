function solution(triangle) {
    var answer = 7;
    const dpTriangle = []
    dpTriangle[0] = triangle[0]
    for(let i=1; i<triangle.length; i++){
        dpTriangle[i] = []
        for(let j=0; j<triangle[i].length; j++){
            let list =[]
            if(dpTriangle[i-1][j-1]){
                list.push(dpTriangle[i-1][j-1]+triangle[i][j])
            }
            if(dpTriangle[i-1][j]){
                list.push(dpTriangle[i-1][j]+triangle[i][j])
            }
            dpTriangle[i][j] = Math.max(...list)
            if(dpTriangle[i][j]>answer) answer = dpTriangle[i][j]
        }
    }
    

    return answer;
}
