// enum Gender { Male, Female, Other };

// // interface UserInfo {
// //   // 原始型別
// //   id: number;
// //   name:string;

// //   // 廣義物件型別
// //   birth: Date;
// //   interests: string[];

// //   // TypeScript Enum 或 Tuple 都可
// //   gender: Gender;

// //   // 明文型別，這裡用物件明文型別
// //   address: {
// //     country: string;
// //     city: string;
// //     postalcode:string;
// //   };

// //   // 函式型別
// //   logInfo(message: string): void;
// // }

// // 單純只有涵式的格式

// // interface UpdateRecord {
// //   (id: number, newRecord: UserInfo): void;
// // }


// interface Person {
//   name : string;
//   age: number;
//   hasPet: boolean;
// }

// const maxwell: Person = {
//   name: 'Maxwell',
//   age: 20,
//   hasPet: false
// }
// const leo: Person = {
//   name: 'Maxwell',
//   age: 20,
// }
// const martin: Person = {
//   name: 'Maxwell',
//   age: 20,
//   hasPet: false,
//   job: 'engineer'
// }
// const topy: Person = {
//   name: 'Maxwell',
//   age: 20,
//   hasPet: "false"
// }

// function printPersonInfo(person: Person) {
//   console.log(`name: ${person.name}`);
//   console.log(`Age is: ${person.age}`);
//   console.log(`Owns a pet? ${person.hasPet}`);
// }

// printPersonInfo({
//   name:'kkk',
//   age: 55,
//   hasPet: false,

//   job: 'Foent-End'
// })

// let infoMax = {
//   name: 'Maxwell',
//   age: 20,
//   hasPet: false,
//   job: 'Foent-End'
// }

// printPersonInfo(infoMax);


// interface I1 {a: string; b: number};
// interface I2 {b: number; c: boolean};
// interface I3 {a: string; c: string};


// interface I12 extends I1, I2 {};
// interface I23 extends I2, I3 {};
// interface I13 extends I1, I3 {};

// interface I123 extends I1, I2, I3 {};

// let hhh:I12={
//   a:'ss',
//   b:445,
//   c:false,
// }


// // function addition( p1:number, p2:number) : number{
// //   return p1 +p2;
// // }


// // function addition( p1:string, p2:string) :number {
// //   return parseInt(p1, 10) + parseInt(p2, 10);
// // }

// interface AddOperation {
//   addition(p1:number, p2:number): number;
//   addition(p1:string, p2:string): number;
// }


// const addunction : AddOperation = {
//   addition(p1 :number|string , p2:number|string){
//     if(typeof p1 === 'number' && typeof p2 === 'number'){
//       return p1 + p2;
//     }else if(typeof p1 === 'string' && typeof p2 === 'string'){
//       return parseInt(p1, 10) + parseInt(p2, 10);
//     }
//     throw new Error('丟的值錯誤');
//   }
// }

// interface AddOperation {
//   ggg? : 'string'
// }

// type Dictionary = {
//   [propName: string]: string,
// };
// interface StringTypedList {
//   [index: number]: string,
// };

// let normalDictionary: Dictionary = {
//   hello: 'world',
//   thisFeature: 'is crazy'
// };
// let emptyDictionary: Dictionary = {};

// let wrongDictionary: Dictionary = {
//   hello: 123,
//   thisFeature: true
// };

// type UseBothKeyType = {
//   [key:number]: string,
//   [key:string]: number
// }

// // type UserInfo = {
// //   name: string,
// //   [prop: string]: string;
// // }

// type UserInfo = {
//   name: string,
//   birth: Date,
//   [prop: string]: string;
// }

// type AAAA = {
//   readonly p :any
// }

// let bbb:AAAA = {
//   p: 'bbb'
// };

// bbb.p = 'aaa';

// interface Counter {
//   (start: number) :void;

//   increment() :number;
//   reser(): void;
//   value: number;
// }

// // function createCounter(): Counter {

  

// //   return counter;
// // }


// type UserInfo1 ={
//   name: string,
//   age: number
// }

// type UserInfo2 = {
//   hasPet: boolean,
//   ownsMotorcycle: boolean
// }

// type UnionSet2 = UserInfo1 | UserInfo2;

// let asda : UnionSet2 = {
//   name: 'asd',
//   age: 55
// }
// let asda2 : UnionSet2 = {
//   hasPet: false,
//   ownsMotorcycle: false
// }
// let asda3 : UnionSet2 = {
//   name: 'asd',
//   age: 55,
//   hasPet: false,
//   ownsMotorcycle: false
// }
// let fjk1 : UnionSet2 = {
//   name: 'asd',
//   // age: 55,
//   // hasPet: false,
//   ownsMotorcycle: false
// }
// let fjk2 : UnionSet2 = {
//   name: 'asd',
//   age: 55,
//   // hasPet: false,
//   ownsMotorcycle: false
// }
// let fjk3 : UnionSet2 = {
//   // name: 'asd',
//   age: 55,
//   hasPet: false,
//   ownsMotorcycle: false
// }

// type gggg = number & string;

// type hhh = UserInfo1 & number;

// let jjj : hhh = 555;


interface ISummation {
  (...args: number[]): number;
  (arr: number[]): number;
}


let F : ISummation = function (p1: number | number[] , ...ff: number[]){
  
  if(typeof p1 === 'number' && ff instanceof Array){
    return ff.reduce((acc,cur)=>acc + cur, p1);
  }else if (p1 instanceof Array){
    return p1.reduce((acc,cur)=>acc + cur, 0);
  }
  
  throw new Error('is wrong');
  
}

console.log(F(2,2,3,4,5));
console.log(F([1,2,3,4,5]));