def solution(arr, queries):
    answer = []
    for query in queries:
        tempList = []
        for i in range(query[0], query[1] + 1):
            if arr[i] > query[2]:
                tempList.append(arr[i])
        try: 
            answer.append(min(tempList))
        except:
            answer.append(-1)
        
    return answer