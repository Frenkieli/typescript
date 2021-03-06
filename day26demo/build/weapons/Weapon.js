"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import MeleeAttack from '../abilities/MeleeAttack';
var Equipments_1 = __importDefault(require("../equipments/Equipments"));
var Weapon = /** @class */ (function () {
    function Weapon() {
        this.type = Equipments_1.default.Weapon;
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
//# sourceMappingURL=Weapon.js.map