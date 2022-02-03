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
      {
        label: 'Early Childhood',
        icon: 'child_toy_icons/early-childhood-toy.png'
      },
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
        icon: 'child_toy_icons/teenage-toy.png'
      },
      {
        label: 'Adults',
        icon: 'child_toy_icons/adult-toy.png'
      }
      ],
      image: 'Children',
      title: 'Age groups'
    },
  ];
  /*
  public metaCategories = [
    {
      categories: [
        'Babies',
        'Toddlers',
        'Children',
        'Teens',
        'Adults'
      ],
      image: 'Children',
      title: 'Children'
    },
    {
      categories: [
        'Siblings',
        'Cousins'
      ],
      image: 'Siblings_n_Kin',
      title: 'Sibligs & Kin'
    },
    {
      categories: [
        'Working Parents',
        'Retired Parents',
        'Grandparents'
      ],
      image: 'Parents',
      title: 'Parents'
    },
    {
      categories: [
        'Dating Pairs',
        'Engaged Pairs',
        'Married > 10 years',
        'Married 10+ years'
      ],
      image: 'Partners',
      title: 'Partners'
    },
    { 
      categories: [
        'Nephews & Nieces',
        'Aunts & Uncles'
      ],
      image: 'Extended',
      title: 'Extended',
    },
    { 
      categories: [
        'Best Friends',
        'Close Friends',
        'Good Friends'
      ],
      image: 'Friends',
      title: 'Friends'
     },
  ];
  */
  public labels = ['Bed Time', 'Homework', 'Chores', 'Cleaning', 'Hygene'];
  constructor() { }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }
}
