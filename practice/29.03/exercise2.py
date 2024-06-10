def numberCheck():
    num = int(input("Please enter a number: "))
    if num < 0:
        print("The number you chose is negative.")
    elif num == 0:
        print("The number you chose is zero.")
    else:
        print("The number you chose is positive.")
    return num

def numberCheckOddEven():
    num = int(input("Please enter a number: "))
    if num % 2 == 0:
        print("The number you chose is even.")
    else:
        print("The number you chose is odd.")

def combineCheck():
    num = numberCheck()
    if num % 5 == 0:
        print("The number is divisible by five.")
    else:
        print("The number is not divisible by five.")
    return(num)
combineCheck()
num = numberCheck()
smallList = []
mediumList = []
largeList = []
if num < 10:
    smallList.append(num)
    print("The number added to the small list")
elif 10 < num <100:
    mediumList.append(num)
    print("The number added to the medium list")
else:
    largeList.append(num)
    print("The number added to the large list")
