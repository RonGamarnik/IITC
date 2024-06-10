# def reciver():
#     num = int(input("Please enter a number"))
#     return num * 2
# print(reciver())

# def reciver():
#     num1 = int(input("Please enter a number"))
#     num2 = int(input("Please enter a number"))

#     return num1 + num2


# print(reciver())

# def checkNum():
#     num = int(input("Please enter a number in range 1-9: "))
#     if num in range(1,9):
#         print("You right")
#     else:
#         print("YOu should follow orders.")
# checkNum()

# def mergin():
#     x = input("enter somthing: ")
#     y = input("enter somthing: ")
#     z = input("enter somthing: ")
#     a = input("enter somthing: ")
#     return x+" "+y+" "+z+" "+a

# print(mergin())

# def noDuplicate(list):
#     list = set(list)
#     print(list)
 
# noDuplicate([2,3,4,5,6,7,6,5,4,9])
def replace():
    str = input("Please enter a sentence: ")
    word = input("please enter a word you would like to replace: ")
    keyWord = input("replace for?")
    list = [str]
    if word in list:
        list.remove(word)
        list.append(keyWord)
        str = list.join()
        prods