import { container, DI } from "@airport/di";
import { DEMO_DATA_LOADER } from "./app";
import { THEME_DAO } from "./server-tokens";
export class DemoDataLoader {
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
            name: 'Sibligs & Kin',
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
        const themeDao = await container(this).get(THEME_DAO);
        await themeDao.save(themes);
    }
}
DI.set(DEMO_DATA_LOADER, DemoDataLoader);
//# sourceMappingURL=DemoDataLoader.js.map