"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagicAttack = /** @class */ (function () {
    function MagicAttack() {
    }
    MagicAttack.prototype.attack = function (self, target) {
        console.log(self.name + " casts magic and pierces through " + target.name + " with a big sword!");
    };
    return MagicAttack;
}());
exports.default = MagicAttack;
//# sourceMappingURL=MagicAttack.js.map