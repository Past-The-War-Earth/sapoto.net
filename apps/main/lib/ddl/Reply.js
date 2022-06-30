var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
let Reply = class Reply extends AirEntity {
};
__decorate([
    Column({ name: 'NUMBER_OF_DOWN_RATINGS' })
], Reply.prototype, "numberOfDownRatings", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_UP_RATINGS' })
], Reply.prototype, "numberOfUpRatings", void 0);
__decorate([
    ManyToOne()
], Reply.prototype, "situationThread", void 0);
__decorate([
    ManyToOne({ optional: true })
], Reply.prototype, "parentReply", void 0);
__decorate([
    ManyToOne({ optional: true })
], Reply.prototype, "situationIdea", void 0);
__decorate([
    OneToMany({ mappedBy: 'parentReply' })
], Reply.prototype, "childReplies", void 0);
__decorate([
    OneToMany({ mappedBy: 'reply' })
], Reply.prototype, "replyRatings", void 0);
__decorate([
    OneToMany({ mappedBy: 'reply' })
], Reply.prototype, "replyTypes", void 0);
__decorate([
    Transient()
], Reply.prototype, "userRelyRating", void 0);
Reply = __decorate([
    Entity(),
    Table({ name: 'REPLIES' })
], Reply);
export { Reply };
//# sourceMappingURL=Reply.js.map