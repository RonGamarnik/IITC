const carOnOrOffDisplay = document.querySelector(".onOrOf");
const gasStation = document.querySelector(".refuel");
const fuelDisplay = document.querySelector(".fuelDisplay");
const carElement = document.querySelector(".car");
gasStation.style.display = "none";

class Car {
    constructor(name, model, year, color, isOn, fuelLevel) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.isOn = isOn;
        this.fuelLevel = fuelLevel;
    }
}

const car1 = new Car("Ferrari", "California", 2024, "Red", false, 20);
carOnOrOffDisplay.textContent = `${car1.name} is off`;
fuelDisplay.textContent = car1.fuelLevel;

function fuelConsumption() {
    if (car1.isOn) {
        const fuelConsumeInterval = setInterval(() => {
            if (car1.fuelLevel <= 0) {
                car1.fuelLevel = 0; // Ensure fuel level doesn't go negative
                clearInterval(fuelConsumeInterval);
                car1.isOn = false; // Turn off the car
                carOnOrOffDisplay.textContent = `${car1.name} is off`;
                carElement.classList.remove("driving");
                fueling();
                return;
            }
            car1.fuelLevel -= 10;
            fuelDisplay.textContent = car1.fuelLevel;
        }, 2000);
    }
}

function turnOnOrOff() {
    car1.isOn = !car1.isOn;
    carOnOrOffDisplay.textContent = `${car1.name} is ${car1.isOn ? 'on' : 'off'}`;
    if (car1.isOn) {
        carElement.classList.add("driving");
        fuelConsumption();
    } else {
        carElement.classList.remove("driving");
    }
}

const ignition = document.querySelector("button");
ignition.addEventListener("click", turnOnOrOff);

function fueling() {
    gasStation.style.display = "block";
    const refuelButton = document.querySelector(".refuelBtn");

    // Remove previous event listeners to avoid multiple handlers
    const newRefuelButton = refuelButton.cloneNode(true);
    refuelButton.parentNode.replaceChild(newRefuelButton, refuelButton);

    newRefuelButton.addEventListener("click", () => {
        const desiredFuelAmount = document.querySelector(".refuelInput").value;
        const refuelingLevel = document.querySelector(".currentFueling");
        let targetFuel = parseInt(desiredFuelAmount);

        if (isNaN(targetFuel) || targetFuel < 0) {
            alert("Please enter a valid fuel amount.");
            return;
        }

        const refuelInterval = setInterval(() => {
            if (car1.fuelLevel >= targetFuel) {
                clearInterval(refuelInterval);
                gasStation.style.display = "none";
                return;
            }
            car1.fuelLevel += 10;
            refuelingLevel.textContent = car1.fuelLevel;
            fuelDisplay.textContent = car1.fuelLevel;
        }, 2000);
    });
}
