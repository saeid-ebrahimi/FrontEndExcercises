// Bank Account
// Deposing
// Withdrawing
// Balance - hidden- encapsulated

export class BankAccount {
    private __balance: number;

    constructor(initialBalance: number) {
        this.__balance = initialBalance;
    }

    // Getter to get balance of the bank account
    public get balance(): number {
        return this.__balance;
    }

    // Method Deposit Money
    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("invalid deposit amount");
            return;
        }
        this.__balance += amount;
    }
    public withdraw(amount: number): void {
        if (amount < 0) {
            console.log("Invalid withdrawal amount");
            return;
        }
        if (amount > this.__balance) {
            console.log("Insufficient funds to withdraw this amount of money");
            return;
        }
        this.__balance -= amount;
    }
}
