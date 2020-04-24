"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    Weapon.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    Weapon.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    ;
    return Weapon;
}());
exports.default = Weapon;
// export default interface Weapon {
//   readonly name: string;
//   availableRoles: Role[];
//   attackStragtegy: Attack;
//   switchAttackStrategy(type: Attack): void;
//   attack(self: Character, target: Character): void;
// }
