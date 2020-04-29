"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
function pingRequest(num, errorProbability) {
    if (errorProbability === void 0) { errorProbability = 0; }
    return new Promise(function (resolve, reject) {
        var probability = Math.random();
        if (probability < errorProbability) {
            reject({ data: null, status: 500 });
        }
        var timeout = Math.random() * 3000;
        setTimeout(function () {
            resolve({ data: "Pong: " + num, status: 200 });
        }, timeout);
    });
}
// console.time('1st Pong');
// console.time('2nd Pong');
// console.time('3rd Pong');
console.log('Promise Chain Representation');
// pingRequest(1)
//   .then(respons => {
//     console.log(respons.data);
//     console.timeEnd('1st Pong');
//     return pingRequest(2);
//   })
//   .then(res => {
//     console.log(res.data);
//     console.timeEnd('2nd Pong');
//     return pingRequest(3);
//   })
//   .then(res => {
//     console.log(res.data);
//     console.timeEnd('3rd Pong');
//   })
//   .catch(res => {
//     console.log(`Status: ${res.status}`);
//   })
function pingGenerator() {
    var response1, response2, response3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.time('1st Pong');
                console.time('2nd Pong');
                console.time('3rd Pong');
                return [4 /*yield*/, pingRequest(1)];
            case 1:
                response1 = _a.sent();
                console.log(response1.data);
                console.timeEnd('1st Pong');
                return [4 /*yield*/, pingRequest(2)];
            case 2:
                response2 = _a.sent();
                console.log(response2.data);
                console.timeEnd('2nd Pong');
                return [4 /*yield*/, pingRequest(3)];
            case 3:
                response3 = _a.sent();
                console.log(response3.data);
                console.timeEnd('3rd Pong');
                return [2 /*return*/];
        }
    });
}
// let pingIter = pingGenerator();
// type PRP = Promise<Pong>;
// (pingIter.next().value as PRP).then(res1 => {
//   console.log('Res 1 received');
//   (pingIter.next(res1).value as PRP).then(res2 => {
//     console.log('Res 2 received');
//     (pingIter.next(res2).value as PRP).then(res3 =>{
//       console.log('Res 3 received');
//       pingIter.next(res3);
//     });
//   });
// });
function runGenerator(gen) {
    var iter = gen();
    function recursiveIteration(pushResponse) {
        var result = iter.next(pushResponse);
        if (result.done)
            return;
        result.value.then(function (res) {
            recursiveIteration(res);
        });
    }
    iter.next().value.then(function (res) {
        recursiveIteration(res);
    });
}
runGenerator(pingGenerator);
var hhh = (_a = 0) !== null && _a !== void 0 ? _a : 'hi';
