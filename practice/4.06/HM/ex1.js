let fruits = ["apple", "banana", "mango"]
fruits.push("orange")
console.log(fruits)

fruits.pop("ornage")
console.log(fruits)
fruits.unshift("strawberry")
console.log(fruits)
fruits.shift("strawberry")
console.log(fruits)
let numbers = ["1", "2", "3", "4", "5"]
numbers.forEach((nunmber, index) => console.log(`${index}:${nunmber}`));
const numbers2 = numbers.map((x) => (x * 2))
console.log(numbers2)
const numbers3 = numbers.filter((x) => x % 2 === 0)
console.log(numbers3)
const numbers4 = [1, 2, 3, 4, 5]
const initialValue = 0;
const sumWithInitial = numbers4.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);
console.log(sumWithInitial);
const students = ["Omer", "Jane", "Biden", "Jill"]
let search = students.find(student => student.includes === 'j' || "J")
console.log(search)