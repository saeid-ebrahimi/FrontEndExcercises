import { Agent } from "undici-types";

type UserType2 =  {
    name: string;
    age: number;
    email: string;
}
class AdminUser{
    constructor(user: UserType2) {
        this.name = user.name;
        this.age = user.age;
        this.email = user.email;
    }
    private name: string;
    private age: number;
    private email: string;

}

const user1 = new AdminUser({ name: "Saeid", email: "Saeid@test.com", age: 29 })


type Comparison = {
    first: number;
    second: number;
    comparator: string;
}

function compare(comparisonData: Comparison) {
    const { first, second, comparator } = comparisonData;
    if (comparator === "equal")
    {
        return first === second;
    } else if (comparator === "not equal")
    {
        return first !== second;
    } else if (comparator === "greater")
    {
        return first > second;
    } else if (comparator === 'smaller')
    {
        return first < second;
    }
}

const isSmaller = compare({first: 4, second: 5, comparator: "smaller"})
const isEqual = compare({ first: 4, comparator: "equal", second: 5})