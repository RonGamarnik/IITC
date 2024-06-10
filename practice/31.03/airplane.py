import time
import threading
# class Airline:
#     def __init__ (self, aircraftNum, disabledAircraftNum, employees, parkingLotsNum, destinations, companyValue):
#         self.aircraftNum = aircraftNum
#         self.disabledAircraftNum = disabledAircraftNum
#         self.employees = employees
#         self.parkingLotsNum = parkingLotsNum
#         destinations = []
#         self.destinations = destinations
#         self.companyValue = companyValue
    
    
#     def __str__(self):
#         return f""" 
#             Aircraft Number: {self.aircraftNum},
#             Disabled Aircraft Number: {self.disabledAircraftNum},
#             Employees: {self.employees},
#             Parking Lots Number: {self.parkingLotsNum},
#             Destinations: {self.destinations},
#             Company Value: {self.companyValue}
#         """
#     def purchaseEmployees(self):
#         purchaseQuestion = input("Would you like to manage your employs?")
#         if purchaseQuestion == "yes":
#             hireOrFIre = input("Would you like to hire or fire?")
#             if hireOrFIre == "hire":
#                 hireCountity = int(input("Please enter the number of employees you would like to hire: "))
#                 selectedAirline.employees += hireCountity
        
        

class Airplane:
    def __init__(self, flightRange, passengerCapacity, cargoCapacity, color, weight, crewNum, fuelConsumption,maxSpeed, currentFuelLevel=0):
        self.flightRange = flightRange
        self.passengerCapacity = passengerCapacity
        self.cargoCapacity = cargoCapacity
        self.color = color
        self.weight = weight
        self.crewNum = crewNum
        self.fuelConsumption = fuelConsumption
        self.currentFuelLevel = currentFuelLevel
        self.engine = False  
        self.maxspeed = maxSpeed
    
    def stopEngine(self):
        if not self.engine:
            print("The engine is already off!!!")
        else:
            print("Turning the engine off...")
            self.engine = False
    
    def fuelConsume(self):
        while self.engine==True and self.currentFuelLevel > self.fuelConsumption:  
            self.currentFuelLevel -= self.fuelConsumption  
            time.sleep(5)  
        if self.currentFuelLevel <= 5:
            print("Low fuel level, stopping engine...")
            self.stopEngine()
            self.refuel_prompt()
    
    
    def startEngine(self):
        if self.engine:
            print("The engine is already on")
        else:
            if self.currentFuelLevel <= self.fuelConsumption:
                print("Low fuel level, can't start the engine")
                self.refuel_prompt()
            else:
                print("Engine turned on")
                self.engine = True
                self.thread1 = threading.Thread(target=self.fuelConsume) 
                self.thread1.start()
                
    
    def refuel_prompt(self):
        refuel_option = input("Would you like to refuel? (yes/no): ")
        if refuel_option.lower() == 'yes':
            fuel_amount = int(input("Enter the amount of fuel to refuel: "))  
            self.refuel(fuel_amount)
    
    def refuel(self, amount):
        self.currentFuelLevel += amount
        print(f"Refueled with {amount} units of fuel. Current fuel level: {self.currentFuelLevel}")
        selectedPlane.startEngine()
    
    def __str__(self):
        return f""" 
            flight range : {self.flightRange},
            passengerCapacity : {self.passengerCapacity},
            cargoCapacity : {self.cargoCapacity},
            color : {self.color},
            weight: {self.weight},
            crewNum : {self.crewNum},
            fuelConsumption : {self.fuelConsumption},
            currentFuelLevel : {self.currentFuelLevel},
            """
    def taxicate (self):
        if self.engine == True:
            txicate = input("Would you like to taxi(yes/no)")
            if txicate == "yes":
                print("Preapering for txication")
                time.sleep(2)
                print("starting tacication")
                time.sleep(2)
                print("The plane is ready for take off")
        else:
            print("The engine is off you are not able to taxicate")
            selectedPlane.startEngine()


def depart(selectedPlane):
    destination = input("Please enter your destination: ")
    try:
        distance = int(input(f"Please enter the distance to {destination}: "))
    except ValueError:
        print("Distance should be a numeric value.")
        return

    fuelNeeded = distance / selectedPlane.maxspeed * selectedPlane.fuelConsumption

    if fuelNeeded > selectedPlane.currentFuelLevel:
        print(f"Your fuel level isn't sufficient for the flight. Please refuel {fuelNeeded -selectedPlane.currentFuelLevel} fuel units")
    else:
        print("The plane has started acceleration.")
        time.sleep(5)
        print("The required speed has been reached.")
        time.sleep(5)
        print("Fold the gear.")
        time.sleep(5)
        print("Required altitude has been reached.")

            
            
            
            

plane1 = Airplane(flightRange=12000,passengerCapacity= 500,cargoCapacity= 770, color="black",weight= 25000, crewNum=20,fuelConsumption= 5,maxSpeed=600, currentFuelLevel=2000)
fighterJet = Airplane(flightRange=15000,passengerCapacity= 2,cargoCapacity= 1000, color="black",weight= 17000, crewNum=0,fuelConsumption= 15,maxSpeed=1200,currentFuelLevel=0)
# RGAirlines = Airline(aircraftNum=2000, disabledAircraftNum=0, employees=50000, parkingLotsNum=7000 , destinations=["Miami", "New-York", "Rome", "Madrid", "Bangkok", "Tokyo"],companyValue=2000000000000)
# airlineChoise = input("Please select your airline ('RGAirlines' or 'shitAirlines'):")
planeChoice = input("Please select your plane ('plane 1' or 'fighter jet'): ")
# if airlineChoise == "RGAirlines":
#     selectedPlane = RGAirlines
# elif planeChoice == "shitAirlines":
#     selectedPlane = shitAirlines
# else:
#     print("Invalid plane choice!")
#     exit()
if planeChoice == "plane 1":
    selectedPlane = plane1
elif planeChoice == "fighter jet":
    selectedPlane = fighterJet
else:
    print("Invalid plane choice!")
    exit()
while True:
    action = input("Please select an action ('start engine', 'stop engine'): ")
    if action == "start engine":
        selectedPlane.startEngine()
        selectedPlane.taxicate()
        departdic = input("would you like to depart?")
        if departdic == "yes":
            depart(selectedPlane)
    
    elif action == "stop engine":
        selectedPlane.stopEngine()
    else:
        print("Invalid action!")

