# x= int(input("Please enter a number: "))
# while x <=9999999999999:
#     x = x * x
#     print(x-6)
#     if x/2%1:
#         print("You have made a fatal error!!!!!!")
# import time
# x=int(0)
# while True:
#     time.sleep(1)
#     x += 1
    
#     if x % 60 == 0:
#         print("one minute passed")
#     elif x % 3600 == 0:
#         print("One hour passed")
#     else:
#         print(x)
# sec = int(input("Please enter the amount of sec you would like to count back from: "))
# while sec >0:
#     time.sleep(1)
#     sec -=1
#     print(sec, " seconds")

# def counter():
#     lst = []
#     for i  in range(0,101,2):
#         lst.append(i)    
#     return(sum(lst))

# print(counter())
# def upperLst():
#     lst = ["a", "b", "c"]
#     newLst = []
#     for i in lst:
#         i = i.upper()
#         newLst.append(i)
#     return(newLst)

# print(upperLst())        

def dictChange(dict):
    returnv:k for k,v in dict.items()
# def uniqueNum():
#   lst = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
#   return list(dict.fromkeys(lst))
# print(uniqueNum()) 