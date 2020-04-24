"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role_1 = __importDefault(require("./Role"));
var Character_1 = __importDefault(require("./Character"));
// import MagicAttack from '../abilities/MagicAttack';
// import BasicWand from '../weapons/BasicWand';
var WarlockEquipmentFactory_1 = __importDefault(require("../equipments/WarlockEquipmentFactory"));
var Warlock = /** @class */ (function (_super) {
    __extends(Warlock, _super);
    function Warlock(name) {
        var _this = this;
        var WEF = new WarlockEquipmentFactory_1.default();
        _this = _super.call(this, name, Role_1.default.Warlock, WEF.createWeapon(), WEF.createArmour()) || this;
        return _this;
    }
    return Warlock;
}(Character_1.default));
exports.default = Warlock;
//# sourceMappingURL=Warlock.js.map