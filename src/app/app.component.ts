import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public themes = [{
    display: 'Family Matters',
    value: 'family_matters',
    metaCategories: [
      {
        categories: [{
          label: 'Baby Time',
          icon: 'child_toy_icons/baby-toy.png'
        },
        {
          label: 'Toddler Years',
          icon: 'child_toy_icons/toddler-toy.png'
        },
        /*
        {
          label: 'Early Childhood',
          icon: 'child_toy_icons/early-childhood-toy.png'
        },
        */
        {
          label: 'Middle Childhood',
          icon: 'child_toy_icons/middle-childhood-toy.png'
        },
        {
          label: 'Late Childhood',
          icon: 'child_toy_icons/late-childhood-toy.png'
        },
        {
          label: 'Teenage Years',
          icon: 'child_toy_icons/teenage-game.png'
        },
        {
          label: 'Adults',
          icon: 'child_toy_icons/adult-game.png'
        }
        ],
        image: 'Children',
        title: 'Children'
      },
      {
        categories: [{
          label: 'Siblings',
          icon: null
        }, {
          label: 'Cousins',
          icon: null
        }],
        image: 'Siblings_n_Kin',
        title: 'Sibligs & Kin'
      },
      {
        categories: [{
          label: 'Working Parents',
          icon: null
        }, {
          label: 'Retired Parents',
          icon: null
        }, {
          label: 'Grandparents',
          icon: null
        }],
        image: 'Parents',
        title: 'Parents'
      },
      {
        categories: [{
          label: 'Dating Pairs',
          icon: null
        }, {
          label: 'Engaged Pairs',
          icon: null
        }, {
          label: 'Married < 10 years',
          icon: null
        }, {
          label: 'Married 10+ years',
          icon: null
        }],
        image: 'Partners',
        title: 'Partners'
      },
      {
        categories: [{
          label: 'Nephews & Nieces',
          icon: null
        }, {
          label: 'Aunts & Uncles',
          icon: null
        }],
        image: 'Extended',
        title: 'Extended'
      },
      {
        categories: [{
          label: 'Best Friends',
          icon: null
        }, {
          label: 'Close Friends',
          icon: null
        }, {
          label: 'Good Friends',
          icon: null
        }],
        image: 'Friends',
        title: 'Friends'
      }
    ]
  }, {
    display: 'Another Theme',
    value: 'another_theme',
    metaCategories: [{
      categories: [{
        label: 'First Sub-Stuff',
        icon: ''
      },
      {
        label: 'Second Sub-Stuff',
        icon: ''
      }],
      image: 'other_stuff/fountain',
      title: 'First Thing'
    }, {
      categories: [{
        label: 'First Sub-Thing',
        icon: ''
      },
      {
        label: 'Second Sub-Thing',
        icon: ''
      }],
      image: 'other_stuff/merry-go-round',
      title: 'Second Thing'
    }]
  }];

  currentTheme = this.themes[0]

  public labels = ['Bed Time', 'Homework', 'Chores', 'Cleaning', 'Hygene'];

  constructor() { }

  onThemeSelect(
    event
  ) {
    this.currentTheme = event.detail.value
  }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }
}
