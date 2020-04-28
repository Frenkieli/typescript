type Idrntity<Z,T> = [Z,T];

// let shouldBeNumber: number;

let shouldBeNumber:Idrntity<number, string>;

let aaa : Idrntity<number, string> = [55,'55']

type Dictionary<T> = {
  // [zzz : string]: T
  [prop : string]: T
};

interface LinkedList<T> {
  head: LinkedListNode<T> | null;
  length: number;
  at(index: number): LinkedListNode<T> | null;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

class TypedArray<T> {
  constructor(public values: T[]){}
}

let correctDict: Dictionary<boolean> = {
  aa : false
}

let wrongDict : Dictionary<boolean> = {
  aa: 'false'
}

type operator<T> = (p1: T, p2: T) => T;

let addition: operator<number> =
function(p1: number, p2: number): number {
  return p1+p2;
}

let stringConcatenation: operator<string> = 
function (p1: string, p2: string): string {
  return p1 + p2;
};

function identityFunc<T>(something: T): T{
  return something;
}

type TypeConversion<T, U> = (input: T) => U;

let isPositive: TypeConversion<any, string> = 
  function (input: any) {
    return input.toString();
  }


type DefaultStringDicionary<T = string> = {
  [prop: string]: T
}

let stringDict: DefaultStringDicionary = {
  message: 'Hello world',
  language: 'TypeScript'
};

let booleanDict: DefaultStringDicionary<boolean> = {
  hasPet: false,
  hasMotorcycle: true
}

let A: DefaultStringDicionary;

type primitives = number | string | boolean | null | undefined;

type PrimiriveArray<T extends primitives> = Array<T>;

let numberPrimitiveArr:
  PrimiriveArray<number> = [1,2,3];

let stringPrimitiveArr:
  PrimiriveArray<string> = ['Hello', 'World'];

let numberOrStringPrimitiveArr:
  PrimiriveArray<number | string> = [1, '2', 3];

interface PersonalInfo {
  name: string;
  age: number;
  hasPet: boolean;
}

let invalidObjectArray:
PrimiriveArray<PersonalInfo> = [
    {
      name: 'Maxwell',
      age:20,
      hasPet:false
    }
  ]

interface UserInfo {
  name: string;
  age: number;
  hasPet: boolean;
}

interface UserAccount {
  email: string;
  password: string;
  subscribed: boolean;
}

type UserAll = UserAccount & UserInfo;

type User<T extends UserInfo | UserAccount> = T;

let fff : User<UserInfo> = {
  // email: 'string',
  // password: 'string',
  // subscribed: false,
  name: 'string',
  age: 22,
  hasPet: false,
}

type TypedPrimitiveArray<T extends primitives> = 
  T extends number    ? T[] :
  T extends string    ? T[] :
  T extends boolean   ? T[] :
  T extends null      ? T[] :
  T extends undefined ? T[] : never;

  let onlyNumberArr:
    TypedPrimitiveArray<string> = ['ddd','fff'];

  let onlyStringArr:
    TypedPrimitiveArray<number> = [1 ,2 ,3];

  // let errorTypedPrimitiveArray:
  // TypedPrimitiveArray<number | string> = [1, '2', 3];


  class C<T> {
    constructor(public memberProp: T){}

    public memberFunc(){ return this.memberProp; }

    get value() { return this.memberProp; }

    set value(input: T) { this.memberProp = input;}

  }

let instanceOfC1 = new C<number>(614);

instanceOfC1.memberProp;

instanceOfC1.memberFunc();

instanceOfC1.value;

instanceOfC1.value = 416;

let instanceOfC2: C<number> = new C(614);

instanceOfC2.memberProp;

instanceOfC2.memberFunc();

instanceOfC2.value;

instanceOfC2.value = 416;

let instanceOfC3 = new C(614);

instanceOfC3.memberProp;

instanceOfC3.memberFunc();

instanceOfC3.value;

instanceOfC3.value = 416;

// class D extends C<T>{};
class D extends C<number>{};

class E<T> extends C<T>{};

class Cparent<T, U> {
  constructor(
    public member1: T,
    public member2: U
  ){}

  // public showThis (){
  //   console.log(this.member1,this.member2);
  // }
}

class Cchikd1<T, U> extends Cparent<T, U> {};
class Cchikd2<T, U = T> extends Cparent<T, U> {};
class Cchikd3<T, U extends T> extends Cparent<T, U> {};

let hhh = new Cchikd1<string , number>('sss',555);
let ddd = new Cchikd2<string , number>('sss',555);
let ccc = new Cchikd3<string , number>('sss',555);


type Tany = string;

class KKK<T>{
  constructor(){}
}

let kkkk = new KKK<Tany>();


