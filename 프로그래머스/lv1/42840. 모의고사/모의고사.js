function solution(answers) {
    var answer = [];
    let corrects =[0,0,0];
    
    const no1 = (index)=> ((index % 5) || 5);
    const no2 = (index) => {
        if(index%2===1) return 2;
        else {
            switch(index%8){
                case 2:
                    return 1;
                case 4:
                    return 3;
                case 6:
                    return 4;
                case 0:
                    return 5;
                default:
                    return 1;
            }
        }
    }
    const no3 = (index) =>{
        switch(index%10){
            case 1:
            case 2:
                return 3;
            case 3:
            case 4:
                return 1;
            case 5:
            case 6:
                return 2;
            case 7:
            case 8:
                return 4;
            case 9:
            case 0:
                return 5;     
        }
    }
    
    answers.forEach((num,index)=>{
        console.log('ans='+num,no1(index+1),no2(index+1),no3(index+1))
        if(num===no1(index+1)) corrects[0]++;
        if(num===no2(index+1)) corrects[1]++;
        if(num===no3(index+1)) corrects[2]++;
    })
    
    let max = Math.max(...corrects);
    
    corrects.forEach((correct,index)=>{
        if(correct===max) answer.push(index+1)
    })

    return answer;
}