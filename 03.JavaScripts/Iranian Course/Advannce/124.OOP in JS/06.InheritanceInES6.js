class Animal{
    constructor() {
        this.name = "GenericAnimal"
    }
    eat(){
        return "Food Consumed"
    }
}

class Mamal extends Animal(){
    constructor() {
        super();
        this.name = "Generic mamal."
    }
    milk(){
        return "Milk Produced"
    }
}