import { NumbersCollection } from "./NumbersCollection";


export abstract class Sorter {
    // TODO: fix type annotation
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract get length(): number;
    sort(): void { 
        for (let i = 0; i < this.length; i++)
        {
            for (let j = 0; j < this.length - i - 1; j++)
            {   
                if (this.compare(j,j+1))
                {
                    this.swap(j, j+1);
                }                
            }
        };
    }
}
