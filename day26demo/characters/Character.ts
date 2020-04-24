import Role from './Role';
// import Attack from '../abilities/Attack';
import Weapon from '../weapons/Weapon';

import Armour from '../armours/Armour';

import Equipment from '../equipments/Equipment';
import Weapons from '../weapons/Weapons';

export default class Character {
  // private attackRef: Attack;


  constructor(
    public readonly name: string,
    public readonly role: Role,
    private weaponRef: Weapon,
    private armourRef: Armour,
    // private attackRef:Attack,
  ){
    // this.attackRef = this.weaponRef.attackStragtegy;
  };

  public introducs() {
    console.log(`
      Hi, I'm ${this.name} the ${this.role}
    `);
  }

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

  public equip(equipment: Equipment) {
    const { availableRoles: roles } = equipment;
    if(
      roles.length === 0 ||
      roles.indexOf(this.role) !== -1){
        if( equipment instanceof Weapon) {
          this.weaponRef = equipment;
        }else if( equipment instanceof Armour) {
          this.armourRef = equipment;
        }
    } else {
      throw new Error(`${this.role} cannot equip ${equipment.name}`);
    }

    console.log(`${this.name} has equipped a ${equipment.type} - ${equipment.name}`);
  }



  public attack( target: Character) {
    this.weaponRef.attack(this, target);
  }
}