import { Collection } from "./sorter";

export class NumbersCollection implements Collection{
    constructor(public data: number[]) { };
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