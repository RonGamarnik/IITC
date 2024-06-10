# import random

# def guess_combination(target):
#     guess = ''
#     attempts = 0
#     while guess != target:
#         guess = ''.join(random.choice('0123456789') for _ in target)
#         attempts += 1
#         print(f"Attempt {attempts}: {guess}")
#         if guess == target:
#             print(f"Guessed the right combination {target} in {attempts} attempts!")
#             break
        
# target_combination = input("please enter your password: ") 
# guess_combination(target_combination) 
# targetPassword = int(input("Please enter your password: "))
# password = 0
# attempt = 0
# while password != targetPassword:
#     password +=1
#     attempt +=1
#     print("Attempt number", attempt,"I guessed ", password)
# print("your password is: ",password)
targetPassword = input("Please enter two digits: ")
targetPasswordLst = list(map(int, targetPassword))
password = [0, 0]

while targetPasswordLst[0] != password[0]:
    password[0] += 1

while targetPasswordLst[1] != password[1]:
    password[1] += 1

passwordStr = ''.join(map(str, password))
print("Your password is: ", passwordStr)

        