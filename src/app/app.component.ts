import { Component, OnInit } from '@angular/core';

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
  ];
  public labels = ['Bed Time', 'Homework', 'Chores', 'Cleaning', 'Hygene'];
  constructor() { }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }
}
