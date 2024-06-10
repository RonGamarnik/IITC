class Car():
    model = "Form"
    def __init__(self, manufacture, model, year):
        self.manufacture = manufacture
        self.model = model
        self.year = year

class Driver():
    def __init__(self, name, gender, age):
        self.name = name
        self.gender = gender
        self.age = age

    def getDriverName(self):
        return self.name

class SportsCar(Car, Driver): 
    def __init__(self, car, driver):
        self.car = car
        self.driver = driver
    def isSportsCar(self):
        if self.car.manufacture == "Ferrari":
            return True
        return False

    def isEligibleForSportDriver(self):
         if (self.driver.age > 25 and self.car.year > 2017): 
             return True 
         return False
car = Car('ferrari', '488 spider', 2018)
car2 = Car('nissan', '488', 2018)
driver = Driver("Alex","male", 30)
driver2 = Driver("Ron","male", 20)
sportsCar = SportsCar(car, driver2)
sportsCar2 = SportsCar(car2, driver)
print(sportsCar.driver.getDriverName())