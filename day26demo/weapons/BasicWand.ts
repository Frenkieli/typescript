import Weapon from './Weapon';
import Role from '../characters/Role';
import Character from '../characters/Character';
import Attack from '../abilities/Attack';
import MagicAttack from '../abilities/MagicAttack';



export default class BasicWand extends Weapon {
  public readonly name = 'Basic Wand';


  public availableRoles = [
    Role.Warlock
  ];

  public attackStrategy = new MagicAttack();

  // public switchAttackStrategy(type: Attack) {
  //   this.attackStragtegy = type;
  // }

  // public attack(self: Character, target:Character) {
  //   this.attackStragtegy.attack(self, target);
  // }
}