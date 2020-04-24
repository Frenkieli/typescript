"use strict";
// let myName = 'Maxwell';
// let age = 20;
// let hasPet = false;
// let nothing = undefined;
// let nothingLiterally = null;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// age = '20';
// hasPet = null;
// nothing = '20';
// let aaa : undefined = undefined;
// let bbb : null = null;
// aaa = 'ddd';
// bbb = false;
// let str : string | null = null;
// let ccc = str;
// str = 'asdas';
// str = undefined;
// str = null;
// let aaa : string ;
// let bbbb : string  = 'asdada';
// aaa = bbbb as string;
// let name : string ;
// console.log(aaa);
var info = {
    name: 'kkk',
    age: 20,
    hasPet: false
};
var someone = {
    knows: undefined,
    identity: null
};
// info.name    = false;
// info.age     = null;
// info.hasPet  =  'dog';
// someone.knows    = 'nothing';
// someone.identity = 'john Snow';
// info = {
//   name : 'aaa',
//   age  : 10
// };
// someone = {
//   knows: undefined,
//   identity: null,
//   loves : 'Ygreeee'
// };
// info.job = 'engineer';
delete info.hasPet;
console.log(info);
info.hasPet = true;
console.log(info);
var nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false
    }
};
var obj1 = { hello: 'World' };
var obj2 = __assign(__assign({}, obj1), { goodbye: 'Cruel World' });
var obj3 = { hello: 'Another World' };
var obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});
var justAnObjest = { hello: 'World' };
// justAnObjest.hello = 'kkk';
// justAnObjest.hello = null;
// justAnObjest = {goodbye: 'byebye'};
// justAnObjest.newProp = 'kkk';
// justAnObjest = 123;
// justAnObjest = [1, '2', 3, '4', 5, true, {hello: 'World'}];
// justAnObjest = function () { console.log('可以ㄟ')};
// justAnObjest = new Object();;
// justAnObjest = new String('ddd');
// justAnObjest = new Number(55);
// justAnObjest = Object;
// justAnObjest = Array;
var arrayObject = [1, 2, 3, 4, 5];
var functionObject = function () { console.log('hi'); };
var objectObject = new Promise(function (resolve) { return resolve(123); });
var primitiveObject = new String('Ding!Ding!Ding!Ding!Ding!Ding!');
var classItself = Object;
// arrayObject.customProp = 123;
// functionObject.customProp = 456;
// objectObject.customProp = 'kkk?';
// primitiveObject.customProp = 'hasdjhasjk';
// classItself.customProp = 3.1415926;
// arrayObject.pop = function () { return 123;};
// arrayObject.pop = function () { console.log('aaa');};
// arrayObject.pop = function () { return '123';};
var asimpleFunction = function () { console.log('asimpleFunction'); };
var addition = function (num1, num2) {
    return num1 + num2;
};
// let shouldBeString : string = addition(123, 456);
var doesItWork1 = function () {
    return undefined;
};
var doesItWork2 = function () {
    return undefined;
};
// let doesItWork3 = function () :undefined {
// }
var doesItWork4 = function () {
    return undefined;
};
// 全部都是數字
var numbers = [1, 2, 3, 4, 5];
// 全部都是字串
var strings = ['hi', 'how are you', 'goodbye'];
var object1 = [
    { message: 'hello' },
    { message: 'hi' },
    { message: 'Goodbye' }
];
var object2 = [
    { message: 'hello' },
    { message: 'hi', revolt: true },
    { message: 'Goodbye' }
];
var object3 = [
    { message: 'hello' },
    { message: 101101010 },
    { message: 'Goodbye' }
];
var asdad = [
    [1, 2, 3],
    ['hi', 'hello'],
    [true, false, 123, null],
    ['string', undefined]
];
var yyy = ['aaa', 'fff', 'jjj'];
var zzz = ['aaa', 'fff', 'jjj'];
var ccc = ['aaa', 'fff', 'jjj'];
// yyy = [123,456,789];
// zzz = [123,456,789];
// ccc = [123,456,789];
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
var weekDayOfBirthday = WeekDay.Monday;
var TGIF = WeekDay.Friday;
var keyOfTGIF = WeekDay[TGIF];
console.log({ TGIF: TGIF, keyOfTGIF: keyOfTGIF });
