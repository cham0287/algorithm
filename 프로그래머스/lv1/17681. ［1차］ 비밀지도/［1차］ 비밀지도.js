function solution(n, arr1, arr2) {
    var answer = [];
    arr1 = arr1.map(row=>intToHashMap(row,n))
    arr2 = arr2.map((row,yIdx)=>{
        return intToHashMap(row,n)
    })
    const newArr = arr1.map((row,yIdx)=>{
        return row.map((item,xIdx)=>{
            if(item==='1'||arr2[yIdx][xIdx]==='1') return '1'
            else return '0'
        })
    })
    return newArr.map(row=>row.join('').replaceAll('1','#').replaceAll('0',' '));
}

const intToHashMap = (num,num2)=>{
    let transArr = num.toString(2).split('');
    while(transArr.length<num2){
        transArr.unshift('0')
    }
    return transArr;
     
}