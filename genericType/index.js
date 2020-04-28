"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let shouldBeNumber: number;
var shouldBeNumber;
var aaa = [55, '55'];
var TypedArray = /** @class */ (function () {
    function TypedArray(values) {
        this.values = values;
    }
    return TypedArray;
}());
var correctDict = {
    aa: false
};
var wrongDict = {
    aa: 'false'
};
var addition = function (p1, p2) {
    return p1 + p2;
};
var stringConcatenation = function (p1, p2) {
    return p1 + p2;
};
function identityFunc(something) {
    return something;
}
var isPositive = function (input) {
    return input.toString();
};
var stringDict = {
    message: 'Hello world',
    language: 'TypeScript'
};
var booleanDict = {
    hasPet: false,
    hasMotorcycle: true
};
var A;
var numberPrimitiveArr = [1, 2, 3];
var stringPrimitiveArr = ['Hello', 'World'];
var numberOrStringPrimitiveArr = [1, '2', 3];
var invalidObjectArray = [
    {
        name: 'Maxwell',
        age: 20,
        hasPet: false
    }
];
var fff = {
    // email: 'string',
    // password: 'string',
    // subscribed: false,
    name: 'string',
    age: 22,
    hasPet: false,
};
var onlyNumberArr = ['ddd', 'fff'];
var onlyStringArr = [1, 2, 3];
// let errorTypedPrimitiveArray:
// TypedPrimitiveArray<number | string> = [1, '2', 3];
var C = /** @class */ (function () {
    function C(memberProp) {
        this.memberProp = memberProp;
    }
    C.prototype.memberFunc = function () { return this.memberProp; };
    Object.defineProperty(C.prototype, "value", {
        get: function () { return this.memberProp; },
        set: function (input) { this.memberProp = input; },
        enumerable: true,
        configurable: true
    });
    return C;
}());
var instanceOfC1 = new C(614);
instanceOfC1.memberProp;
instanceOfC1.memberFunc();
instanceOfC1.value;
instanceOfC1.value = 416;
var instanceOfC2 = new C(614);
instanceOfC2.memberProp;
instanceOfC2.memberFunc();
instanceOfC2.value;
instanceOfC2.value = 416;
var instanceOfC3 = new C(614);
instanceOfC3.memberProp;
instanceOfC3.memberFunc();
instanceOfC3.value;
instanceOfC3.value = 416;
// class D extends C<T>{};
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
;
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(C));
;
var Cparent = /** @class */ (function () {
    function Cparent(member1, member2) {
        this.member1 = member1;
        this.member2 = member2;
    }
    return Cparent;
}());
var Cchikd1 = /** @class */ (function (_super) {
    __extends(Cchikd1, _super);
    function Cchikd1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchikd1;
}(Cparent));
;
var Cchikd2 = /** @class */ (function (_super) {
    __extends(Cchikd2, _super);
    function Cchikd2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchikd2;
}(Cparent));
;
var Cchikd3 = /** @class */ (function (_super) {
    __extends(Cchikd3, _super);
    function Cchikd3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchikd3;
}(Cparent));
;
var hhh = new Cchikd1('sss', 555);
var ddd = new Cchikd2('sss', 555);
var ccc = new Cchikd3('sss', 555);
var KKK = /** @class */ (function () {
    function KKK() {
    }
    return KKK;
}());
var kkkk = new KKK();
