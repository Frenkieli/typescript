import Role from './Role';
import Character from './Character';
// import MeleeAttack from '../abilities/MeleeAttack';

import SwordsmanEquipmentFactory from '../equipments/SwordsmanEquipmentFactory'
// import BasicSword from '../weapons/BasicSword';

export default class Swordsman extends Character {
  constructor(name: string) {
    let SEF = new SwordsmanEquipmentFactory();
    super(
        name,
        Role.Swordsman,
        SEF.createWeapon(),
        SEF.createArmour()
      );
  }
}