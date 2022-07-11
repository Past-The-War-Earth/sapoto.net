var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/tarmaq-entity";
let Situation = class Situation extends AirEntity {
};
__decorate([
    Column({ name: 'TEXT', nullable: false })
], Situation.prototype, "text", void 0);
__decorate([
    Column({ name: 'URGENCY_TOTAL' })
], Situation.prototype, "urgencyTotal", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
], Situation.prototype, "numberOfUrgencyRatings", void 0);
__decorate([
    Column({ name: 'IMPORTANCE_TOTAL' })
], Situation.prototype, "importanceTotal", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_IMPORTANCE_RATINGS' })
], Situation.prototype, "numberOfImportanceRatings", void 0);
__decorate([
    ManyToOne()
], Situation.prototype, "topic", void 0);
__decorate([
    OneToMany({ mappedBy: 'situation' })
], Situation.prototype, "ratings", void 0);
__decorate([
    Transient()
], Situation.prototype, "userRating", void 0);
Situation = __decorate([
    Entity(),
    Table({ name: 'SITUATIONS' })
], Situation);
export { Situation };
//# sourceMappingURL=situation.js.map