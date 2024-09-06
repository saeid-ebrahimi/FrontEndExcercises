class Product {
    constructor(
        public id: string,
        public price: number,
        public description: string,
    ) {}

    public display(): void {
        console.log(
            `Product(ID: ${this.id}, Price: ${this.price}, Description: ${this.description})`,
        );
    }
}

export class Book extends Product {
    constructor(
        public id: string,
        public price: number,
        public description: string,
        public author: string,
        public title: string,
    ) {
        super(id, price, description);
    }
    public display(): void {
        console.log(
            `Book(ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Price: ${this.price}, Description: ${this.description})`,
        );
    }
}

export class Electronic extends Product {
    constructor(
        public id: string,
        public price: number,
        public description: string,
        public brand: string,
        public model: string,
    ) {
        super(id, price, description);
    }

    public display(): void {
        console.log(
            `Electronic(ID: ${this.id}, Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Description: ${this.description})`,
        );
    }
}
