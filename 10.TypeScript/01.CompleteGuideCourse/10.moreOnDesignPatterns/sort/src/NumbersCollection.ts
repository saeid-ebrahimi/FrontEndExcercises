import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super();
     };
    swap(leftIndex:number, rightIndex:number): void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    compare(leftIndex:number, rightIndex:number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    get length(): number{
        return this.data.length;
    }
}