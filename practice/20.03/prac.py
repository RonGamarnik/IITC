# #num1=int(input("please enter a number: "))
# #num2=int(input("please enter one more number: "))
# #if num1<0:  
#  #print("The first number is negative.")
# # if num1==0:
#   #   print("The first number is zero.")
# #if num1>0:
#     #print("The first number is positive.")
# #if num2<0:  
#  #print("The second number is negative.")
#  #if num2==0:
#     # print("The fsecond number is zero.")
# #if num2>0:
#     #print("The second number is positive.")
# #print(num2 + num1)
# #print(num1 - num2)
# #print(num1 / num2)
# #print(num2 * num1) 
# #name = input("Please enter your name:")
# #age = int(input("Please enter your age:"))
# #print(f"My name is {name} and I am {age} years old.")
# #firstName=input("Please enter your first name:")
# #lastName=input("Please enter your last name:")
# #print(len(firstName + lastName))
# #irstName=input("Please enter your first name:")
# #lastName=input("Please enter your last name:")
# #if (firstName[0].isupper()) and (lastName[0].isupper()):
#     #print("Hello " + firstName + " " + lastName)
# #else:
#     #print("Please use CAPITAL LETTERS")
# #age=int(input("Please enter your age: "))
# #if age<18:
#     #print("You are so young.")
# #else:
#     #print("We love old people.")
# #num=5
# #while num<14:
#     #num=num+1
#     #print(num)
# num=6
# while num<100:
#     num=num+2
#      print(num)
# lst = []
# wordCount = 0
# while wordCount<7:
#      wordCount=wordCount + 1
#      word =input("Please enter a word?")
#      lst.append(word)
# print(lst)
# lst = []
# x = ["banana", "melon"]
# y = ["aplle, car"]
# z = ["plane, door"]
# lst.append(x)
# lst.append(y)
# lst.append(z)
# lst.sort
# print(lst)
# print(len(lst))
# countOfX=lst.count(x)
# print(countOfX)
# num=0
# for num in range(2,44):

#    print(num)  
# num = 0
# for num in range(0,101,2):
#     print(num)
# num = int(input("Please enter a number: "))
# x = 0
# lst = []
# for element in lst:
#     value = int(element)
# for num in range(0,num):
#     x = x + 1
#     lst.append(x)
#     nums = sum(lst)
# print(nums)
# x = input("Please enter a word: ")
# if x == "xyz":
#     print("xxx")
# bannedWord = ["fuck", "bitch", "stupid"]
# sentence = input("Please enter a sentence: ")
# words = sentence.split()
# words = [element for element in words if element not in bannedWord]
# filterdSentence =" ".join(words,)
# print(filterdSentence)
# num = 0.0
# for i in range(50):
#     num += 0.1
#     print(float(num))
#     if num == int:
#         print(int(num))
# def duplicat():
#     num1 = int(input("Please enter a number: "))
#     num2 =int(input("Please enter a number: "))
#     print(num1 * num2)
# duplicat()
# def myName():
#     name = input("Please enter your name: ")
#     print("Hello " + name )
# myName()
# def fullName():
#     firstName = input("Please enter your first name: ")
#     lastName = input("Please enter your last name: ")
#     newFirstName = firstName.replace("x", "")
#     newLastName = lastName.replace("y", "")
#     print(newFirstName + " " + newLastName)

# fullName()

# def divide():
#     num1 = int(input("Please enter a number: "))
#     num2 = int(input("Please enter a number: "))
#     if num2 == 0:
#         print("ILEGAL")
#     else:    
#         print(num1/num2)
# divide()
# n = 5
# fact = 1

# for i in range(1, n+1):
# 	fact = fact * i

# print("The factorial of 5 is : ", end="")
# print(fact)
# def beep():
#     sentence = input("please enter a sentence: ")
#     print(sentence + " beep")
# beep()
# def nums_mul():
#     num1 = int(input("Please enter a number: "))
#     num2 = int(input("Please enter a number: "))
#     sumNum = num1 * num2
#     if sumNum <= 0:
#         print(0)
#     else:
#         print(sumNum)
# nums_mul()
# numbers = []
# while len(numbers)<10:
#     numbers.append(int(input("Please enter a number: ")))
#     print("The total sum of the numbers is: ", sum(numbers))
# ls = []
# while "finish" is not ls:
#     ls.append(input("Please enter a word: "))
#     if "finish" in ls:
#         break
# info = {
#     "first name" : "",
#     "last name" : "",
#     "email" : "",
#     "age" : "",
# }
# def dictUp():
#     info.update({ 
#         "first name" :input("Please enter your first name: "),
#         "last name" :input("Please enter your last name: "),
#         "email" :input("Please enter your email: "),
#         "age" :input("Please enter your age: "),
#         })
       
# dictUp()
# print(info)
# lst1 = []
# lst2 = []
# while len(lst1)<4 and len(lst2)<4:
#     lst1.append(input("Please enter a word for the first list: "))
#     lst2.append(input("Please enter a word for the second list: "))
# mixList = lst1 + lst2
# print(mixList)
# lst = []
# while lst==lst:
#     lst.append(input("Please enter a word: "))
# numbers = [0,9,7,2,4,5,6,8,1]
# sorted_numbers = sorted(numbers, reverse=True)
# for num in sorted_numbers:
#     print(num)
# lst = [1,2,3,4,5,6,7,8]
# x = int(input("please enter the location in the list: "))
# y = input("Please enter a value you would like to add to the list: ")
# lst.insert(x , y)
# print(lst)
# lst = [1,2,3,4,5,6,7,8]
# x = int(input("please enter the location of the value you would like to remove from the list: "))
# del lst[x]
# print(lst)
# cars = {
#     "type" : "",
#     "sub" : "",
#     "year": "", 
#     "number" : "",
#     "owner": "",    
# }
# for key in cars.keys() :
#     cars[key] = input(f"please enter {key}: " )
# print(cars)
# my_dict = {}
# for i in range(16):
#     my_dict[i] = i * i
# print(my_dict)

x = 0

while 0 == 0:
    x += 1
    print(x)