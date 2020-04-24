// class C {
//   P: Tp;
  
//   M(paramName: Tparam): Toutput {
//     // 方法內的內容
//   }
// }

// class CPersonInfo {
//   name: string;
//   age: number;
//   hasPet: boolean;
  
//   constructor(name: string = 'ggg', age: number = 22, hasPet: boolean = true){
//     this.name = name;
//     this.age = age;
//     this.hasPet = hasPet;
//   }

//   printInfo(){
//     console.log((
//       `
//         name: ${this.name}
//         age: ${this.age}
//         hasPet: ${this.hasPet}
//       `
//     ))
//   }
// }

// let maxwellInfoFromClass = new CPersonInfo('aaa', 33 , false);
// console.log(maxwellInfoFromClass);

// maxwellInfoFromClass.printInfo();

// let maxwellInfoFromClass2 = new CPersonInfo();
// console.log(maxwellInfoFromClass2);

// maxwellInfoFromClass2.printInfo();

type TUserAccount = {
  account: string;
  password: string;
  money: number;
}

interface AccountSystem {
  // users: TUserAccount[];
  // currentUser: TUserAccount | undefined;
  signIn(account: string, password: string): void;
  signOut(): void;
}

interface TransactionSystem {
  deposit(amount: number) : void;
  withdraw(amount: number) : void;
}

interface ICaseMachine extends AccountSystem ,TransactionSystem {};


class CashMachine implements ICaseMachine {
  // private users: TUserAccount[];

  private currentUser: TUserAccount | undefined;

  // constructor (user : TUserAccount[]) {
  //   this.users = user;
  // }
  constructor (private users : TUserAccount[]) {}

  public signIn(account: string, password: string){
    for(let i =0 ;i < this.users.length ; i++){
      const user = this.users[i];
      if(
        user.account === account &&
        user.password === password
      ) {
        this.currentUser = user;
      }
    }

    if(this.currentUser === undefined){
      throw new Error('找不到這個人');
    }
  }

  public signOut() {
    this.currentUser = undefined;
  }

  public deposit(amount: number){
    if(this.currentUser !== undefined){
      this.currentUser.money += amount;
    } else {
      throw new Error('沒有人登入');
    }
  }
  public withdraw(amount: number) {
    if (this.currentUser !== undefined) {
      this.currentUser.money -=amount;
    } else {
      throw new Error('沒有登入');
    }
  }
}


function printInfo(input: TUserAccount | undefined) {
  if( input === undefined){
    console.log('沒有登入');
  } else {
    console.log(`
      Current User: ${input.account}
      Money: ${input.money}
    `);
  }
}

const machine = new CashMachine([
  {account: 'aaa', password: '123', money:11111},
  {account: 'bbb', password: '456', money:22222},
  {account: 'ccc', password: '789', money:33333}
]);
console.log('Initialized: ');
// printInfo(machine.currentUser);

machine.signIn('aaa', '123');
console.log('Signed In: ');
// printInfo(machine.currentUser);

machine.withdraw(5000);
console.log('After Withdraw: ');
// printInfo(machine.currentUser);

machine.signOut();
console.log('Signed Out: ');
// printInfo(machine.currentUser);

