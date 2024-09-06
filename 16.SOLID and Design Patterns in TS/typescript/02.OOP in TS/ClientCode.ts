import { calculateTotalArea, Rectangle, Circle } from "./01.Abstraction";
import { BankAccount } from "./03.Encapsulation";
import { Book, Electronic } from "./07.inheritance Implementation";
const circle: Circle = new Circle(6);
const rectangle: Rectangle = new Rectangle(4, 7);

console.log(calculateTotalArea(circle));
console.log(calculateTotalArea(rectangle));

const myAccount = new BankAccount(300000);
console.log("Current Balance: ", myAccount.balance);
myAccount.deposit(2000);
myAccount.withdraw(3000);
console.log("Current Balance: ", myAccount.balance);

const book1 = new Book(
    "B-01",
    300,
    "best seller book of the year",
    "John Doe",
    "John Doe Diaries",
);
book1.display();

const laptop = new Electronic(
    "E-01",
    5000,
    "Gaming Laptop for extreme usage",
    "ASUS",
    "TUF",
);
