"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Attack from '../abilities/Attack';
var Weapon_1 = __importDefault(require("../weapons/Weapon"));
var Armour_1 = __importDefault(require("../armours/Armour"));
var Character = /** @class */ (function () {
    // private attackRef: Attack;
    function Character(name, role, weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
        // this.attackRef = this.weaponRef.attackStragtegy;
    }
    ;
    Character.prototype.introducs = function () {
        console.log("\n      Hi, I'm " + this.name + " the " + this.role + "\n    ");
    };
    // public equip(weapon: Weapon) {
    //   const { availableRoles : roles } = weapon;
    //   if(
    //       roles.length === 0 ||
    //       roles.indexOf()
    //     )
    // }
    // public attack(target: Character) {
    //   this.attackRef.attack(this, target);
    //   // console.log(`${this.name} attacks ${target.name} using the sword!`);
    // }
    // public swithAttackStrategy(type: Attack) {
    //   this.attackRef = type;
    // }
    Character.prototype.equip = function (equipment) {
        var roles = equipment.availableRoles;
        if (roles.length === 0 ||
            roles.indexOf(this.role) !== -1) {
            if (equipment instanceof Weapon_1.default) {
                this.weaponRef = equipment;
            }
            else if (equipment instanceof Armour_1.default) {
                this.armourRef = equipment;
            }
        }
        else {
            throw new Error(this.role + " cannot equip " + equipment.name);
        }
        console.log(this.name + " has equipped a " + equipment.type + " - " + equipment.name);
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
//# sourceMappingURL=Character.js.map