"use strict";
// enum TransportTicketType {
//   Train,
//   MRT,
//   Aviation
// }
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// type TimeFormat = [number, number, number];
// class TicketSystem {
//   constructor(
//     private type: TransportTicketType,
//     protected startingPoint: string,
//     protected destination: string,
//     private departuerTime: Date,
//   ){};
//   protected deriveDuration(): TimeFormat {
//     return [1, 0, 0];
//   }
//   private deriveArrivalTime(): Date {
//     const { departuerTime } = this;
//     const [hours, minutes, seconds] = this.deriveDuration();
//     const durationSeconds = hours * 60 * 60 + minutes * 60 + seconds;
//     const durationMilliseconds = durationSeconds * 1000;
//     const arrivaMilliseconds = departuerTime.getTime() + durationSeconds;
//     return new Date(arrivaMilliseconds);
//   }
//   public getTicketInfo() {
//     const ticketName = TransportTicketType[this.type];
//     const arrivalTime = this.deriveArrivalTime();
//     console.log(`
//       Ticket Type: ${ticketName}
//       Station:     ${this.startingPoint} - ${this.destination}
//       Departure:   ${this.departuerTime}
//       Arrival:     ${arrivalTime}
//     `)
//   }
// }
// const randomTicket = new TicketSystem(
//   TransportTicketType.Train,
//   'Tainan',
//   'Kaohsiung',
//   new Date(2019, 8, 1, 9, 0, 0),
// );
// type TrainStation = {
//   name: string,
//   nextStop: string,
//   duration: TimeFormat,
// };
// class TrainTicket extends TicketSystem {
//   constructor (
//     startingPoint: string,
//     destination: string,
//     departureTime: Date,
//   ){
//     super(
//       TransportTicketType.Train,
//       startingPoint,
//       destination,
//       departureTime
//     )
//   };
//   static stops: string[] = [
//     'Pingtung',
//     'Kaohsiung',
//     'Tainan',
//     'Taichung',
//     'Hsinchu',
//     'Taipei'
//   ];
//   static stationsDetail: TrainStation[] = [
//     {name: 'Pingtung',  nextStop: 'Kaohsiung',  duration: [2, 30, 0]},
//     {name: 'Kaohsiung', nextStop: 'Tainan',     duration: [1, 45, 30]},
//     {name: 'Tainan',    nextStop: 'Taichung',   duration: [3, 20, 0]},
//     {name: 'Taichung',  nextStop: 'Hsinchu',    duration: [2, 30, 30]},
//     {name: 'Hsinchu',   nextStop: 'Taipei',     duration: [1, 30, 30]},
//   ];
//   private isStopExist(stop: string): boolean {
//     for (let i = 0; i < TrainTicket.stops.length; i += 1) {
//       const existedStop = TrainTicket.stops[i];
//       if (existedStop ===stop) return true;
//     }
//     return false;
//   }
//   protected deriveDuration(): TimeFormat {
//     const { startingPoint, destination } = this;
//     if(
//       this.isStopExist(startingPoint) &&
//       this.isStopExist(destination)
//     ) {
//       let time: TimeFormat = [0, 0, 0];
//       let stopFound = false;
//       for(let i =0; i < TrainTicket.stationsDetail.length; i++) {
//         const detail = TrainTicket.stationsDetail[i];
//         if(!stopFound && detail.name === startingPoint) {
//           stopFound = true;
//           time[0] += detail.duration[0];
//           time[1] += detail.duration[1];
//           time[2] += detail.duration[2];
//         }else if (stopFound) {
//           time[0] += detail.duration[0];
//           time[1] += detail.duration[1];
//           time[2] += detail.duration[2];
//           if(detail.nextStop === destination) break;
//         }
//       }
//       let minutes = Math.floor(time[2] / 60);
//       time[1] += minutes;
//       time[2] -= minutes * 60;
//       let hours = Math.floor(time[1] / 60);
//       time[0] += hours;
//       time[1] -= hours * 60;
//       return time;
//     }
//     throw new Error('錯誤站名');
//   }
// }
// const trainTicket = new TrainTicket(
//   'Tainan',
//   'Hsinchu',
//   new Date(2019, 8, 1, 9, 0, 0)
// );
// trainTicket.getTicketInfo();
// // class aaa extends TicketSystem {};
// // let bbb = new aaa();
// class CircleGeometry {
//   private PI: number = 3.14;
//   constructor(public radius: number) {};
//   public area(): number {
//     return this.PI * ( this.radius ** 2 );
//   }
//   public circumference(): number {
//     return 2 * this.PI * this.radius;
//   }
// }
// const myCircle = new CircleGeometry(2);
// console.log(myCircle.area());
// console.log(myCircle.circumference());
// class StaticCircleGeometry {
//   private static PI: number = 3.14;
//   static area(radius: number): number {
//     return StaticCircleGeometry.PI * ( radius ** 2 );
//   }
//   static circumference(radius: number): number {
//     return 2 * StaticCircleGeometry.PI * radius;
//   }
//   static getValueOfPI():number {
//     return StaticCircleGeometry.PI;
//   }
// // 測試看看
//   constructor(public radius: number) {};
//   public aaa(){
//     console.log(this.radius);
//   }
// }
// console.log(StaticCircleGeometry.area(2));
// console.log(StaticCircleGeometry.circumference(2));
// console.log(StaticCircleGeometry.getValueOfPI());
// class CircleGeometryV2 {
//   private PI: number = 3.14;
//   constructor(public radius: number) {};
//   get area() {
//     return this.PI * (this.radius ** 2);
//   }
//   set area(value:number) {
//     this.radius = (value / this.PI) ** 0.5;
//   }
// }
// const randomCircle = new CircleGeometryV2(2);
// console.log(randomCircle.area);
// randomCircle.radius = 3;
// console.log(randomCircle.area);
// // randomCircle.area = 666;
// const anotherRandomCirle = new CircleGeometryV2(2);
// console.log(anotherRandomCirle.radius);
// console.log(anotherRandomCirle.area);
// anotherRandomCirle.area = 3.14 * ( 5 ** 2);
// console.log(anotherRandomCirle.radius);
// class ConstructIsForbidden {
//   private constructor(){
//   }
// }
// // let forbiddenObject = new ConstructIsForbidden();
// class SingletonPerson {
//   private constructor (
//     public readonly name: string,
//     public readonly age: number,
//     public readonly hasPet: boolean,
//   ){};
//   private static Instance: SingletonPerson = new SingletonPerson('Maxwell', 20 , false);
//   static getInstance(): SingletonPerson { return this.Instance};
// }
// const uniquePerson = SingletonPerson.getInstance();
// console.log(uniquePerson);
// console.log(uniquePerson.name);
// console.log(uniquePerson.age);
// console.log(uniquePerson.hasPet);
// // class ggg extends SingletonPerson.getInstance(){}
// class LazySingletonPerson {
//   private constructor(
//     public readonly name: string,
//     public readonly age: number,
//     public readonly hasPet: boolean,
//   ){};
//   private static Instance: LazySingletonPerson | null = null;
//   static getInstance(): SingletonPerson { 
//     if(this.Instance === null) {
//       this.Instance = new LazySingletonPerson('Maxwell', 20 , false);
//     }
//     return this.Instance;
//   };
// }
// enum Color { White, Black, Brown, Grey, Rainbow};
// class Horse {
//   constructor (
//     public name: string,
//     public color: Color,
//     public readonly type: string,
//     private noise: string = 'weeeeeeeeeeeeeeeeeeeeeeeeEeeeeeeeeeeeeee~',
//   ){};
//   public makeNoise() {
//     console.log(this.noise);
//   }
//   public info() {
//     console.log(this.infoText);
//   }
//   protected infoText(): string {
//     return `It is ${this.name} the ${Color[this.color]} ${this.type}`;
//   }
// }
// class Unicorn extends Horse {
//   constructor(name: string) {
//     super(
//       name,
//       Color.Rainbow,
//       'Mystical Unicorn',
//       'Nheeeeeeeeeeeeeeeeheeeeeeeeeeeeeeheheheheheh'
//     )
//   }
//   protected infoText(): string {
//     return `It's a mystical unicon! Its name is ${this.name}`;
//   }
//   public puke():void {
//     console.log('Puking rainbow vomit!');
//   }
// }
// let aRandomHorsie = new Horse('grrrrr', Color['Black'], 'Pony');
// let aRandomUnicorn: Horse = new Unicorn('fff');
// type TA = {hello: string};
// type TB = {hello: string};
// interface IA {
//   hello: string;
// }
// interface IB {
//   hello: string;
// }
// function logTypeA(obj: TA) { console.log(obj);};
// logTypeA( <TA>{hello: 'aaa'} );
// logTypeA( <TB>{hello: 'aaa'} );
// logTypeA( <IA>{hello: 'aaa'} );
// logTypeA( <IB>{hello: 'aaa'} );
var Role;
(function (Role) {
    Role["Swordsman"] = "Swordsman";
    Role["Warlock"] = "Warlock";
    Role["Highwayman"] = "Highwayman";
    Role["BountyHunter"] = "BountyHunter";
    Role["Monster"] = "Monster";
})(Role || (Role = {}));
;
var Character = /** @class */ (function () {
    function Character(name, role, health, mana, strength, defense) {
        if (health === void 0) { health = 50; }
        if (mana === void 0) { mana = 10; }
        if (strength === void 0) { strength = 10; }
        if (defense === void 0) { defense = 5; }
        this.name = name;
        this.role = role;
        this.health = health;
        this.mana = mana;
        this.strength = strength;
        this.defense = defense;
    }
    Character.prototype.attack = function (target) {
        var verb;
        switch (this.role) {
            case Role.Swordsman:
                verb = 'attacking';
                break;
            case Role.Warlock:
                verb = 'cursing';
                break;
            case Role.Highwayman:
                verb = 'ambushing';
                break;
            case Role.BountyHunter:
                verb = 'threatening';
                break;
            default:
                throw new Error(this.role + " \u4E0D\u5B58\u5728\u5594 exist");
        }
        console.log(this.name + " is " + verb + " " + target.name);
    };
    return Character;
}());
var BountyHunter = /** @class */ (function (_super) {
    __extends(BountyHunter, _super);
    function BountyHunter(name) {
        var _this = _super.call(this, name, Role.BountyHunter) || this;
        _this.hostages = [];
        return _this;
    }
    BountyHunter.prototype.capture = function (target, successRate) {
        var randomNumber = Math.random();
        var message;
        var targetTitle = target.name + " the " + target.role;
        if (randomNumber > (1 - successRate)) {
            this.hostages = __spreadArrays(this.hostages, [target]);
            message = this.name + " has captured " + targetTitle;
        }
        else {
            message = this.name + " failed to captured " + targetTitle;
        }
        console.log(message);
    };
    BountyHunter.prototype.sellHostages = function () {
        var totalPrice = this.hostages.length * 1000;
        var hostagesInfo = this.hostages
            .map(function (hostage) { return hostage.name + " the " + hostage.role; })
            .join('\n');
        console.log("\n" + this.name + " sells all hostages, including:\n" + hostagesInfo + "\nReceive Gold: $" + totalPrice + "\n      ");
        this.hostages = [];
    };
    return BountyHunter;
}(Character));
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.role = Role.Monster;
    }
    ;
    Monster.prototype.attack = function (target) {
        console.log(this.name + " is attacking the " + target.role + " - " + target.name);
    };
    return Monster;
}());
// const character1 = new Character('aaa' , Role.Swordsman);
// const character2 = new Character('bbb' , Role.Highwayman);
// character1.attack(character2);
// character2.attack(character1);
// const character = new Character('ccc' , Role.Highwayman);
// const characteraa : ICharacter = new Character('ccc' , Role.Highwayman);
// character.name;
// character.health;
// characteraa.name;
// characteraa.health;
// let aHumanCharacter = new Character('Maxwell' , Role.Swordsman);
// let aMonster = new Monster('Slime');
// aHumanCharacter.attack(aMonster);
// aMonster.attack(aHumanCharacter);
var bountyHunter = new BountyHunter('Maxwell');
var wantedCharacter = new Character('Martin', Role.Highwayman);
var wantedMonster = new Monster('Eikthyrnir');
var desperado = new Character('Lengendary Joe', Role.Highwayman);
bountyHunter.capture(wantedCharacter, 1);
bountyHunter.capture(wantedMonster, 0.5);
bountyHunter.capture(desperado, 0.11);
bountyHunter.sellHostages();
