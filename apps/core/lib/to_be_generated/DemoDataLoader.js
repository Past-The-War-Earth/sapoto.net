var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
let DemoDataLoader = class DemoDataLoader {
    async loadDemoData() {
        let childrenTheme = {
            imageName: 'Children',
            name: 'Children',
            topics: [{
                    name: 'Baby Time',
                    imagePath: 'child_toy_icons/baby-toy.png',
                },
                {
                    name: 'Toddler Years',
                    imagePath: 'child_toy_icons/toddler-toy.png',
                },
                {
                    name: 'Middle Childhood',
                    imagePath: 'child_toy_icons/middle-childhood-toy.png',
                },
                {
                    name: 'Late Childhood',
                    imagePath: 'child_toy_icons/late-childhood-toy.png',
                },
                {
                    name: 'Teenage Years',
                    imagePath: 'child_toy_icons/teenage-game.png',
                },
                {
                    name: 'Adults',
                    imagePath: 'child_toy_icons/adult-game.png',
                }]
        };
        let siblingsTheme = {
            actorRecordId: null,
            actor: null,
            repository: null,
            imageName: 'Siblings_n_Kin',
            name: 'Siblings & Kin',
            topics: [{
                    name: 'Siblings',
                    imagePath: null,
                }, {
                    name: 'Cousins',
                    imagePath: null,
                }],
        };
        let parentsTheme = {
            imageName: 'Parents',
            name: 'Parents',
            topics: [{
                    name: 'Working Parents',
                    imagePath: null,
                }, {
                    name: 'Retired Parents',
                    imagePath: null,
                }, {
                    name: 'Grandparents',
                    imagePath: null,
                }]
        };
        let partnersTheme = {
            imageName: 'Partners',
            name: 'Partners',
            topics: [{
                    name: 'Dating Pairs',
                    imagePath: null,
                }, {
                    name: 'Engaged Pairs',
                    imagePath: null,
                }, {
                    name: 'Married < 10 years',
                    icimagePathon: null,
                }, {
                    name: 'Married 10+ years',
                    imagePath: null,
                }]
        };
        let extendedFamilyTheme = {
            imageName: 'Extended Family',
            name: 'Extended Family',
            topics: [{
                    name: 'Nephews & Nieces',
                    imagePath: null,
                }, {
                    name: 'Aunts & Uncles',
                    imagePath: null,
                }]
        };
        let friendsTheme = {
            imageName: 'Friends',
            name: 'Friends',
            topics: [{
                    name: 'Best Friends',
                    imagePath: null,
                }, {
                    name: 'Close Friends',
                    imagePath: null,
                }, {
                    name: 'Good Friends',
                    imagePath: null,
                }]
        };
        let themes = [
            childrenTheme,
            siblingsTheme,
            parentsTheme,
            partnersTheme,
            extendedFamilyTheme,
            friendsTheme
        ];
        themes.forEach(theme => {
            theme.ageSuitability = 0;
            theme.topics.forEach(topic => {
                topic.theme = theme;
                topic.ageSuitability = 0;
            });
        });
        await this.themeDao.save(themes);
    }
};
__decorate([
    Inject()
], DemoDataLoader.prototype, "themeDao", void 0);
DemoDataLoader = __decorate([
    Injected()
], DemoDataLoader);
export { DemoDataLoader };
//# sourceMappingURL=DemoDataLoader.js.map