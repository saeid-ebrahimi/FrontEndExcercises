// regular: 10%
// premium: 20%
// gold: 30%

interface Customer {
    giveDiscount(): number;
    addLoyaltyPoints(amountSpent: number): number;
}

export class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent;
    }
}

export class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2;
    }
}

export class GoldCustomer implements Customer {
    giveDiscount(): number {
        return 30;
    }
    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 3;
    }
}
export class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}
