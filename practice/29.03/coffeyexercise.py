import time

def process_explain(selected_drink):
    print("The coffee preparation process has started.")
    time.sleep(2)
    print(f"Enjoy your {selected_drink}!")

def process_payment(drink_price):
    money = 0
    while money < drink_price:
        try:
            payment = float(input(f"You have left to pay ${drink_price - money}: "))
            money += payment
        except ValueError:
            print("Invalid input! Please enter a valid amount.")
        if money > drink_price:
            change = money - drink_price
            print(f"You have paid ${money}. Your change is ${change}.")
            time.sleep(2)
            print("Please take the change.")
            money -= change
            time.sleep(2)

    return money

def select_drink(inventory):
    while True:
        print("Welcome to our coffee machine.")
        time.sleep(2)
        print("""Please enter a number for an option from the menu:
                        1. Cappuccino
                        2. Espresso
                        3. Americano
                        4. Exit""")
        drink_decision = input("Your choice: ")

        if drink_decision == '4':
            print("Exiting...")
            return None

        if drink_decision == "report":
            print(inventory)

        drinks = {'1': 'cappuccino', '2': 'espresso', '3': 'americano'}
        if drink_decision in drinks:
            return drinks[drink_decision]
        else:
            print("Invalid option!")

def main():
    inventory = {
        "milk": 50,
        "cappuccino": 20,
        "espresso": 30,
        "americano": 10,
        "water": 100,
        "money": 0.0,
    }

    price = {
        "cappuccino": 15,
        "espresso": 10,
        "americano": 12
    }

    while True:
        selected_drink = select_drink(inventory)
        if not selected_drink:
            break

        if inventory[selected_drink] <= 0 or inventory["water"] <= 0:
            print("Sorry, the selected drink is not available. Please choose another option.")
            continue

        print(f"The price of {selected_drink} is ${price[selected_drink]}")
        total_money = process_payment(price[selected_drink])
        inventory["money"] += total_money
        print(f"You have paid ${total_money}.")
        time.sleep(2)
        process_explain(selected_drink)
        inventory[selected_drink] -= 1
        inventory["water"] -= 1

if __name__ == "__main__":
    main()
    
