"use strict";
// class C {
//   P: Tp;
;
var CashMachine = /** @class */ (function () {
    // constructor (user : TUserAccount[]) {
    //   this.users = user;
    // }
    function CashMachine(users) {
        this.users = users;
    }
    CashMachine.prototype.signIn = function (account, password) {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.account === account &&
                user.password === password) {
                this.currentUser = user;
            }
        }
        if (this.currentUser === undefined) {
            throw new Error('找不到這個人');
        }
    };
    CashMachine.prototype.signOut = function () {
        this.currentUser = undefined;
    };
    CashMachine.prototype.deposit = function (amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += amount;
        }
        else {
            throw new Error('沒有人登入');
        }
    };
    CashMachine.prototype.withdraw = function (amount) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= amount;
        }
        else {
            throw new Error('沒有登入');
        }
    };
    return CashMachine;
}());
function printInfo(input) {
    if (input === undefined) {
        console.log('沒有登入');
    }
    else {
        console.log("\n      Current User: " + input.account + "\n      Money: " + input.money + "\n    ");
    }
}
var machine = new CashMachine([
    { account: 'aaa', password: '123', money: 11111 },
    { account: 'bbb', password: '456', money: 22222 },
    { account: 'ccc', password: '789', money: 33333 }
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
