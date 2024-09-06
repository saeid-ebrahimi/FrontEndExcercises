"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const sorter_1 = require("./sorter");
class NumbersCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    ;
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    ;
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
