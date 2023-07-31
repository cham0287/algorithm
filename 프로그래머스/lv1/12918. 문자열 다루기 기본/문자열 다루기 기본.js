function solution(s) {
    return isRightLength(s) && isAllNum(s);
}

function isRightLength (str){
    if(str.length===4||str.length===6) return true;
    else return false;
}

function isAllNum (str){
    let result = true;
    for(s of str){
        if(isNaN(Number(s))) result =false;
    }
    return result;
    
}