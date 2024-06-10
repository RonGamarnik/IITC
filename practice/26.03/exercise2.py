# def convert(list, di):
#     for a, b in list:
#         di.setdefault(a, []).append(b)
#     return di
# list = [("first", 1),("2nd", 2),("3rd", 3)]
# dict={}
# dict.update(convert(list, dict))
# totalSum = sum(sum(values) for values in dict.values())
# for k in dict:
#     dict[k] = totalSum
# print(dict)
# def marginLists():
#     list1=[1,2,3,4,5,6,7,8,9,10]
#     list2 = [2, 11, 4, 6, 76, 8, 10]
#     list3 =list(set(list1).intersection(list2))
#     return(list3)
# print(marginLists())
# def marginDict(dict1, dict2):
#     merged = dict1
#     for key in dict2:
#             merged[key] = dict2[key]
#     return merged
# dict1 = {
#         "banana" : "yellow",
#         "apple" : "red",
#         "cucamber" : "green",
#     }
# dict2 = {
#         "first" : "apple",
#         "2nd" : "banana",
#         "cucamber" : "blue",}
# print(marginDict(dict1,dict2))
# list1 = ["first", "second", "third"]  
# list2 = [1, 2, 3]
# dict = {}

# for i, key in enumerate(list1):
#     if i < len(list2):  # Check if the index exists in list2
#         dict[key] = list2[i]

# print(dict)
# def longestString(lst):
#     longest = ""  
#     for string in lst:
#         if len(string) > len(longest):
#             longest = string 
#     return longest


# my_list = ["short", "medium", "longeststring", "longer"]
# print(longestString(my_list))  

   
    
    