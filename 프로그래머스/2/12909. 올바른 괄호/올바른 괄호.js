function solution(s){
    
    let answer = true;
    
    const arr = s.split('')
        
    const opennings =[]
    
    for (let i=0; i<arr.length; i++){
        if(i===0 && arr[i]===')') {
            answer = false;
        }
        
        if(arr[i]==='('){
            opennings.push(arr[i])
        } else {
            opennings.pop()
        }
    }
        
    return  opennings.length ===0 && answer;
}