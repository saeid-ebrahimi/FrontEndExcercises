class Bird {
    fly(): void {
        console.log("Bird is flying");
    }
}
class FlightlessBird {
    fly(): void {
        console.log("Flightless Birds cannot fly");
    }
}
class Penguin extends FlightlessBird {
}

let penguin: Penguin = new Penguin();
console.log(penguin.fly());
