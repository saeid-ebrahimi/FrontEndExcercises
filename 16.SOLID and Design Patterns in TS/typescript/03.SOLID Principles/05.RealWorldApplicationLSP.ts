// Payment Processor
// Credit Card
// Debit Card
// Paypal

export abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
}

export class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Credit Card Payments - Amount $${amount}`);
    }
}

export class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Debit Card Payments - Amount $${amount}`);

    }
}

export class PaypalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Paypal Payment - Amount $${amount}`);
    }
}

export class BitcoinPayments extends PaypalProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Bitcoin Payment - Amount $${amount}`);

    }
}
export function executePayment(paymentProcessor: PaymentProcessor, amount: number): void {
    paymentProcessor.processPayment(5000)
}

