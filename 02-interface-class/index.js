"use strict";
// enum Gender { Male, Female, Other };
var F = function (p1) {
    var ff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ff[_i - 1] = arguments[_i];
    }
    if (typeof p1 === 'number' && ff instanceof Array) {
        return ff.reduce(function (acc, cur) { return acc + cur; }, p1);
    }
    else if (p1 instanceof Array) {
        return p1.reduce(function (acc, cur) { return acc + cur; }, 0);
    }
    throw new Error('錯了喔');
};
console.log(F(2, 2, 3, 4, 5));
console.log(F([1, 2, 3, 4, 5]));
