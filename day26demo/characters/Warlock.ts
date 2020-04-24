import Role from './Role';
import Character from './Character';
// import MagicAttack from '../abilities/MagicAttack';

// import BasicWand from '../weapons/BasicWand';

import WarlockEquipmentFactory from '../equipments/WarlockEquipmentFactory';


export default class Warlock extends Character {
  constructor(name: string) {
    let WEF = new WarlockEquipmentFactory();
    super(
      name,
      Role.Warlock,
      WEF.createWeapon(),
      WEF.createArmour()
    );
  }
  // public attack(target: Character) {
  //   console.log(`${this.name} casts magic and pierced through ${target.name}!`);
  // }
}
