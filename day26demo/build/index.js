"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Swordsman_1 = __importDefault(require("./characters/Swordsman"));
var Warlock_1 = __importDefault(require("./characters/Warlock"));
var WeaponFactory_1 = __importDefault(require("./weapons/WeaponFactory"));
var Weapons_1 = __importDefault(require("./weapons/Weapons"));
var swordsman = new Swordsman_1.default('Maxwell');
var warlock = new Warlock_1.default('Martin');
// swordsman.introducs();
// warlock.introducs();
// const weaponFactory = new WeaponFactory();
// console.log(`Swordsman attacking the warlock: `);
// swordsman.attack(warlock);
// console.log(`warlock attacking the swordsman: `);
// warlock.attack(swordsman);
// console.log(`Using MeleeAttack: `);
// swordsman.attack(warlock);
// swordsman.swithAttackStrategy(new StabAttack());
// console.log(`Using StabAttack: `);
// swordsman.attack(warlock);
console.log("Using BasicSword - MeleeAttack: ");
swordsman.attack(warlock);
console.log("Using Dagger - StabAttack: ");
var dagger = WeaponFactory_1.default.createWeapon(Weapons_1.default.Dagger);
swordsman.equip(dagger);
swordsman.attack(warlock);
// try{
//   swordsman.equip(new BasicWand());
// } catch(err) {
//   console.log(err);
// }
//# sourceMappingURL=index.js.map