var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Entity, OneToMany, Table } from "@airport/tarmaq-entity";
let Theme = class Theme extends AirEntity {
};
__decorate([
    OneToMany({ mappedBy: 'theme' })
], Theme.prototype, "topics", void 0);
Theme = __decorate([
    Entity(),
    Table({ name: 'THEME' })
], Theme);
export { Theme };
//# sourceMappingURL=Theme.js.map