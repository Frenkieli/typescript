interface Iterator<T> {
  next(): void;

  isDone(): boolean;

  currentItem: T | null;
}

interface Iterable<T>{
  createIterator(): Iterator<T>;
}

class NormalIterator<T> implements Iterator<T> {
  public currentItem: T | null = null;
  private currentIndex = 0;

  constructor(private items: Array<T>) {
    this.currentItem = items[0];
  }

  public isDone() {
    // return this.currentItem !== null; 
    return this.currentItem == null;  // 應該是等於空的才算結束嗎？但是陣列並不會嚴格等於空值喔
  }

  public next() {
    console.log(this.currentItem, this.isDone())
    if( this.isDone()) throw new Error('Iterator out of bound.');
  
    this.currentIndex++;
    this.currentItem = this.items[this.currentIndex];
  }


}

class MyArray<T> implements Iterable<T> {
  constructor(public items: Array<T>) {}

  createIterator() {
    return new NormalIterator<T>(this.items);
  }
}

let aCollection = new MyArray<number>([1,2,3,4,5]);

let anIterator = aCollection.createIterator();

while(!anIterator.isDone()) {
  console.log(`Iterated value: ${anIterator.currentItem}`);
  anIterator.next();
}

try{
  anIterator.next();
} catch (err) {
  console.log(err + 'Out of bound error caught!');
}


// class GenericLinkedListNode<T> implements LinkedListNode<T> {
//   public head: LinkedListNode<T> | null = null;

//   public length() {};

//   public at(index: number): LinkedListNode<T> | null { return null};

// }


// function foreach<T>(iter: Iterator<T>, callback: (v: T) => void) {
//   while(!iter.isDone()) {
//     callback(iter.currentItem as T);
//     iter.next();
//   }
// }

// let collection1 = new MyArray([1,2,3]);
// let collection2 = new IterableLinkedList<number>();


let typeMap = new Map<number, string>();


typeMap.set(1, 'Hello world');

typeMap.get(1);

typeMap.has(1);

let typeSet = new Set<number>();

typeSet.add(123);

typeSet.values();

typeSet.clear();

let unspecifiedTypeMap1 = new Map();
let unspecifiedTypeSet1 = new Set();

let unspecifiedTypeMap2 = new Map([[123, 'ddd']]);
let unspecifiedTypeSet2 = new Set([1,2,3,4,5]);


function * jjjj(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let num = jjjj();

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

function * aaa1(){
  yield 1;
  yield 2;
  yield 3;
}
function * aaa2(){
  yield 1;
  yield 2;
  return 3;
}