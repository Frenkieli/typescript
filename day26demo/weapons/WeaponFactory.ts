import Weapons from './Weapons';
import Weapon from './Weapon';

import BasicSword from './BasicSword';
import BasicWand from './BasicWand';
import Dagger from './Dagger';

export default class WeaponFactory {
  static createWeapon(type: Weapons): Weapon {
    switch (type) {
      case Weapons.BasicSword: return new BasicSword();
      case Weapons.BasicWand: return new BasicWand();
      case Weapons.Dagger: return new Dagger();
        
    
      default:
        throw new Error(`${Weapons[type]} isn't registered`);
    }
  }
}