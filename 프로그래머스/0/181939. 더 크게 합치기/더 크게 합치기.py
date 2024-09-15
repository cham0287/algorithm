def solution(a, b):
    temp = []
    temp.append(int(str(a)+str(b)))
    temp.append(int(str(b)+str(a)))
    return max(temp)