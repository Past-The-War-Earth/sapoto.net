var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
let SituationRating = class SituationRating extends RepositoryEntity {
};
__decorate([
    Column({ name: 'IMPORTANCE_RATING' }),
    DbNumber()
], SituationRating.prototype, "importanceRating", void 0);
__decorate([
    Column({ name: 'URGENCY_RATING' }),
    DbNumber()
], SituationRating.prototype, "urgencyRating", void 0);
__decorate([
    ManyToOne()
], SituationRating.prototype, "situation", void 0);
SituationRating = __decorate([
    Entity(),
    Table({ name: 'SITUATION_RATINGS' })
], SituationRating);
export { SituationRating };
//# sourceMappingURL=SituationRating.js.map