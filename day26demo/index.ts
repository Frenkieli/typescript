import Swordsman from './characters/Swordsman';
import Warlock from './characters/Warlock';
// import StabAttack from './abilities/StabAttack';

import weapons from './weapons/Weapons';
import WeaponFactory from './weapons/WeaponFactory';

import Dagger from './weapons/Dagger';
import BasicWand from './weapons/BasicWand';
import Weapons from './weapons/Weapons';

const swordsman = new Swordsman('Maxwell');
const warlock = new Warlock('Martin');
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


console.log(`Using BasicSword - MeleeAttack: `);
swordsman.attack(warlock);




console.log(`Using Dagger - StabAttack: `);
const dagger = WeaponFactory.createWeapon(Weapons.Dagger);




swordsman.equip(dagger);
swordsman.attack(warlock);

// try{
//   swordsman.equip(new BasicWand());
// } catch(err) {
//   console.log(err);
// }

