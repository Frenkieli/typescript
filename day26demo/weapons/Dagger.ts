import Weapon from './Weapon';
import Role from '../characters/Role';
import Character from '../characters/Character';
import Attack from '../abilities/Attack';
import StabAttack from '../abilities/StabAttack';



export default class Dagger extends Weapon {
  public readonly name = 'Dagger';


  public availableRoles = [
  ];

  public attackStrategy = new StabAttack();

  // public switchAttackStrategy(type: Attack) {
  //   this.attackStragtegy = type;
  // }

  // public attack(self: Character, target:Character) {
  //   this.attackStragtegy.attack(self, target);
  // }
}