const carMakers:string[] = []
const carMakers2:string[] = ["Toyota", "Ford", "Chevy"]
const carMakers3 = ["Toyota", "Ford", "Chevrolet"]
const carMakers4 = [] //avoid this

const dates = [new Date(), new Date()]
const carsByMake = [
    ["f150"],
    ['corolla'],
    ['camaro']
];

let carsByMake2: string[][] ;
// why we use type arrays
// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(9832) //ts error
carMakers.push("Ferrari")

// help with methods like 'map'
carMakers.map((car: string): string => {
    return "Maker is "+car;
});

//arrays with different types
const importantDates : (Date | string)[] = [new Date()];
importantDates.push("2024-01-01");
importantDates.push(new Date());
// importantDates.push(829) // ts error
