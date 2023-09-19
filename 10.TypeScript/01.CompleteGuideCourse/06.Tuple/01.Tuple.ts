// tuples are array-like structure where each element represents some property of a record

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};
// array can swipe elements type position and ts don't give any error
const pepsi = ["brown", true, 40]
pepsi[0]= 90
pepsi[2] = "brown"

// but in tuples cannot swipe element type position
const pepsiTuple: [string, boolean, number] = ["brown", true, 40]
pepsiTuple[0] = "orange"
// pepsiTuple[0]= 90 //ts error
pepsiTuple[2] = 50
// pepsiTuple[2] = "brown" //ts error

// another way to represent tuple using Type alias
// one of tuple usage is in reading CSV files
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 30]
const tea: Drink = ['brown', false, 0]