import BasicWand from "../weapons/BasicWand";
import BasicRobe from "../armours/BasicRobe";
import EquipmentFactort from "./EquipmentFactory";

class WarlockEquipmentFactory implements EquipmentFactort {
  public createWeapon(){
    return new BasicWand();
  }
  public createArmour() {
    return new BasicRobe();
  }
}

export default WarlockEquipmentFactory;