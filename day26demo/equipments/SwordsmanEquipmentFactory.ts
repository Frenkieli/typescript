import BasicSword from "../weapons/BasicSword";
import BasicArmour from "../armours/BasicArmour";
import EquipmentFactort from "./EquipmentFactory";

class SwordsmanEquipmentFactory implements EquipmentFactort {
  public createWeapon(){
    return new BasicSword();
  }
  public createArmour() {
    return new BasicArmour();
  }
}

export default SwordsmanEquipmentFactory;