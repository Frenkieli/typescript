import Character from '../characters/Character';
import Attack from '../abilities/Attack';
import Role from '../characters/Role';
// import MeleeAttack from '../abilities/MeleeAttack';

import Equipments from '../equipments/Equipments';
import Equipment from '../equipments/Equipment';


export default abstract class Weapon implements Equipment{
  abstract name: string;

  public type = Equipments.Weapon;

  abstract availableRoles: Role[];

  abstract attackStrategy: Attack;

  public switchAttackStrategy(type: Attack): void {
    this.attackStrategy = type;
  }

  public attack(self: Character, target: Character): void {
    this.attackStrategy.attack(self, target);
  };
}
// export default interface Weapon {
//   readonly name: string;

//   availableRoles: Role[];

//   attackStragtegy: Attack;

//   switchAttackStrategy(type: Attack): void;

//   attack(self: Character, target: Character): void;
// }