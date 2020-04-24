import Character from '../characters/Character';
import Weapon from './Weapon';
import Attack from '../abilities/Attack';
import MeleeAttack from '../abilities/MeleeAttack';
import Role from '../characters/Role';

export default class BasicSword extends Weapon {
  public readonly name = 'Basic Sword';


  public availableRoles = [
    Role.Swordsman,
    Role.Highwayman
  ];

  public attackStrategy = new MeleeAttack();

  // public switchAttackStrategy(type: Attack) {
  //   this.attackStragtegy = type;
  // }

  // public attack(self: Character, target:Character) {
  //   this.attackStragtegy.attack(self, target);
  // }
}