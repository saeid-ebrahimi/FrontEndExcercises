class Vehicle{
    constructor(public color: string) {
        this.color = color
    }

    private drive(): void{
        console.log("chugga chugga");  
    }
    protected honk(): void{
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, public color:string) {
        super(color);
        this.wheels = wheels;

    }
    private driveCar(): void {
        console.log("vroom vroom");
    }
    public startDrivingProcess(): void {
        this.driveCar();
    }
}


const vehicle = new Vehicle("orange");
// vehicle.drive(); // throw error
// vehicle.honk(); // throw error
const car = new Car(5,"blue");
// car.driveCar(); // throw error
car.startDrivingProcess
// car.honk(); // throw error