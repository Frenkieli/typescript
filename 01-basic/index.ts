// let myName = 'Maxwell';
// let age = 20;
// let hasPet = false;
// let nothing = undefined;
// let nothingLiterally = null;


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


let info = {
  name   : 'kkk',
  age    : 20,
  hasPet : false
}

let someone = {
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

let nestedObject = {
  prop: 'Hello',
  child: {
    prop1: 123,
    prop2: false
  }
};

let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
  goodbye: 'Cruel World'
});


let justAnObjest : object = { hello: 'World'};

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


let arrayObject = [1, 2, 3, 4, 5];
let functionObject = function () {console.log('hi')};
let objectObject = new Promise((resolve) => resolve(123));
let primitiveObject = new String('Ding!Ding!Ding!Ding!Ding!Ding!');
let classItself = Object;

// arrayObject.customProp = 123;
// functionObject.customProp = 456;
// objectObject.customProp = 'kkk?';
// primitiveObject.customProp = 'hasdjhasjk';
// classItself.customProp = 3.1415926;

// arrayObject.pop = function () { return 123;};
// arrayObject.pop = function () { console.log('aaa');};
// arrayObject.pop = function () { return '123';};


let asimpleFunction = function (){console.log('asimpleFunction');}

const addition = function(num1 : number, num2 : number) : number {
  return num1 + num2
}

// let shouldBeString : string = addition(123, 456);

let doesItWork1 = function() {
  return undefined;
}
let doesItWork2 = function () :undefined {
  return undefined;
}
// let doesItWork3 = function () :undefined {
// }
let doesItWork4 = function () :void {
  return undefined;
}


// 全部都是數字
let numbers :Array<number | string> = [1, 2, 3, 4, 5];

// 全部都是字串
let strings :Array<string> = ['hi', 'how are you', 'goodbye'];

let object1 = [
  {message : 'hello'},
  {message : 'hi'},
  {message : 'Goodbye'}
];
let object2= [
  {message : 'hello'},
  {message : 'hi', revolt: true},
  {message : 'Goodbye'}
];
let object3 = [
  {message : 'hello'},
  {message : 101101010},
  {message : 'Goodbye'}
];

let asdad = [
  [1,2,3],
  ['hi','hello'],
  [true, false, 123, null],
  ['string', undefined]
]

type aaa = [string,string,string];

let yyy : aaa = ['aaa','fff','jjj'];
let zzz = <aaa>['aaa','fff','jjj'];
let ccc = ['aaa','fff','jjj'] as aaa;


// yyy = [123,456,789];
// zzz = [123,456,789];
// ccc = [123,456,789];

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let weekDayOfBirthday = WeekDay.Monday;


let TGIF: WeekDay = WeekDay.Friday;

let keyOfTGIF = WeekDay[TGIF];
console.log({TGIF, keyOfTGIF});

type PersonInfo = {
  name: string,
  age: number,
  hasPet: boolean
};

/**
 * @description
 * @author frenkie
 * @date 2020-04-22
 * @param {PersonInfo} info
 */
function printInfo (info : PersonInfo){
  console.log(`Name: ${info.name}`);
  console.log(`age: ${info.age}`);
  console.log(`Has Pet?: ${info.hasPet}`);
}

printInfo({
  name: 'string',
  age: 22,
  hasPet: true,
  hello : 'sss'
})

let infoGo: PersonInfo = {
  name: 'string',
  age: 22,
  hasPet: true,
  hello : 'sss'
}
printInfo(infoGo);

/**
 * @description 不會飛
 * @enum {number}
 */
enum Gender {Male, Female, Other};

/**
 * @description 會飛
 */
type AccountInfo = {
  account: string,
  password: string,
  nickname?: string,
  birth? :Date,
  gender? :Gender,
  subscribed: boolean
};

let accountMaxwell: AccountInfo = {
  account: 'string',
  password: 'string',
  subscribed: false
}

let additionThreeAsDefault = function (num1: number, num2?: number) {
  if (num2){
    return num1 +num2;
  }
  return num1 +3;
}

type kkk = [string , string ,string? ,Date?];

let theErrer = function() { 
  // return 42
  throw new Error('掰掰');
}
let ggg : never = theErrer();

let anyDemo : any;

let unDemo : unknown;

let numDemo : number;

numDemo = unDemo;

if(typeof unDemo === 'number'){
  numDemo = unDemo;
}