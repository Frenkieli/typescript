"use strict";
var NormalIterator = /** @class */ (function () {
    function NormalIterator(items) {
        this.items = items;
        this.currentItem = null;
        this.currentIndex = 0;
        this.currentItem = items[0];
    }
    NormalIterator.prototype.isDone = function () {
        return !(this.currentItem !== null);
    };
    NormalIterator.prototype.next = function () {
        console.log(this.currentItem, this.isDone());
        if (this.isDone())
            throw new Error('Iterator out of bound.');
        this.currentIndex++;
        this.currentItem = this.items[this.currentIndex];
    };
    return NormalIterator;
}());
var MyArray = /** @class */ (function () {
    function MyArray(items) {
        this.items = items;
    }
    MyArray.prototype.createIterator = function () {
        return new NormalIterator(this.items);
    };
    return MyArray;
}());
var aCollection = new MyArray([1, 2, 3, 4, 5]);
var anIterator = aCollection.createIterator();
while (!anIterator.isDone()) {
    console.log("Iterated value: " + anIterator.currentItem);
    anIterator.next();
}
try {
    anIterator.next();
}
catch (err) {
    console.log(err + 'Out of bound error caught!');
}
