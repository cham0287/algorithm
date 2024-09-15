def solution(my_string, overwrite_string, s):
    answer = ''
    head = my_string[0:s]
    len1 = len(my_string)
    len2 = len(overwrite_string)
    return my_string[0:s]+overwrite_string+my_string[(s+len2):len1]

