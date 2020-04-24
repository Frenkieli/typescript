import Weapon from '../weapons/Weapon';
import Armour from '../armours/Armour';

export default interface EquipmentFactort{
  createWeapon(): Weapon;
  createArmour(): Armour;
}