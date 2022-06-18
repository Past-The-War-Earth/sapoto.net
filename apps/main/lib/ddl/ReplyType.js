var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DbString, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
let ReplyType = class ReplyType extends AirEntity {
};
__decorate([
    ManyToOne()
], ReplyType.prototype, "reply", void 0);
__decorate([
    DbString()
], ReplyType.prototype, "type", void 0);
ReplyType = __decorate([
    Entity(),
    Table({ name: 'REPLY_TYPES' })
], ReplyType);
export { ReplyType };
//# sourceMappingURL=ReplyType.js.map