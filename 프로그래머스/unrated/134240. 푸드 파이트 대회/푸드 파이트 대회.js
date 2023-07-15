function solution(food) {
    food.shift()
    let str ='';
    food.forEach((a,index)=>{
        const num = Math.floor(a/2);
        for(let i=0; i<num; i++){
            str+=index+1;
        }
    })
    return str+'0'+str.split('').reverse().join('');
}