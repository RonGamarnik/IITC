inventory = {
    "food": 0,
    "pants": 0,
    "shirts": 0,
    "toys": 0,
}

options = {
    1: "food",
    2: "pants",
    3: "shirts",
    4: "toys"
}

while True:
    x = int(input("Please enter a number to change desired category 1 for 'food', 2 for 'pants', 3 for 'shirts' and 4 for 'toys': "))
    if 1 <= x <= 4:
        category = options[x]
        inventory[category] = int(input(f"Please enter the new amount of '{category}': "))
    else:
        print("The item you chose is not in the inventory.")

    modifyInventory = int(input("Please input the number for action:1 for 'Add' 2 for 'Remove'"))
    if modifyInventory == 1:
        ammoutToAdd = int(input("Please enter the ammount you would like to add: "))
        inventory[category] += ammoutToAdd
        print("Updated inventory ", inventory)
    elif modifyInventory == 2:
        ammoutToRemove = int(input("Please enter the ammount you would like to remove: "))
        inventory[category] -= ammoutToRemove
        print("Updated inventory ", inventory)

    else:
        print("You have enterd invalid number please try again.")
    
    repeatOrExit = input("Would you like to modify another item? ")
    if repeatOrExit == "yes":
        continue
    else:
        break
    
    