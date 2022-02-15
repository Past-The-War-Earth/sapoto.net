import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public metaCategories = [
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
        label: 'Early Childhood',
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
        label: 'Siblings'
      }, {
        label: 'Cousins'
      }],
      image: 'Siblings_n_Kin',
      title: 'Sibligs & Kin'
    },
    {
      categories: [{
        label: 'Working Parents'
      }, {
        label: 'Retired Parents'
      }, {
        label: 'Grandparents'
      }],
      image: 'Parents',
      title: 'Parents'
    },
    {
      categories: [{
        label: 'Dating Pairs'
      }, {
        label: 'Engaged Pairs'
      }, {
        label: 'Married < 10 years'
      }, {
        label: 'Married 10+ years'
      }],
      image: 'Partners',
      title: 'Partners'
    },
    {
      categories: [{
        label: 'Nephews & Nieces'
      }, {
        label: 'Aunts & Uncles'
      }],
      image: 'Extended',
      title: 'Extended'
    },
    {
      categories: [{
        label: 'Best Friends'
      }, {
        label: 'Close Friends'
      }, {
        label: 'Good Friends'
      }],
      image: 'Friends',
      title: 'Friends'
    }
  ];
  public labels = ['Bed Time', 'Homework', 'Chores', 'Cleaning', 'Hygene'];
  constructor() { }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }
}
