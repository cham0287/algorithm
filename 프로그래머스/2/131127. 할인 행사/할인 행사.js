function solution(want, number, discount) {
    const shoppingListMap = {};
    let answer = 0;
    
    want.forEach((item, index) => {
        shoppingListMap[item] = index;
    });
    
    const current = Array(want.length).fill(0);
    for (let i = 0; i < 10; i++) {
        const index = shoppingListMap[discount[i]];
        if (index !== undefined) {
            current[index]++;
        }
    }
    
    if (isTwoArrSame(number, current)) {
        answer++;
    }

    for (let i = 10; i < discount.length; i++) {

        const addItem = discount[i];
        const addIndex = shoppingListMap[addItem];
        if (addIndex !== undefined) {
            current[addIndex]++;
        }
        
        const removeItem = discount[i - 10];
        const removeIndex = shoppingListMap[removeItem];
        if (removeIndex !== undefined) {
            current[removeIndex]--;
        }
        
        if (isTwoArrSame(number, current)) {
            answer++;
        }
    }
    
    return answer;
}

const isTwoArrSame = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
