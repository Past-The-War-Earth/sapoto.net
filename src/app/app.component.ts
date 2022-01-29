import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public metaCategories = [
    {
      categories: [
        'Baby',
        'Toddler',
        'Young Childhood',
        'Middle Childhood',
        'Late Childhood',
        'Teens',
        'Adults'
      ],
      image: 'Children',
      title: 'Children',
      url: '/folder/Children',
    },
    {
      categories: [
        'Siblings',
        'Cousins',
        '2nd Cousins',
        '3rd Cousins'
      ],
      image: 'Siblings_n_Kin',
      title: 'Sibligs & Kin',
      url: '/folder/Children',
    },
    {
      categories: [
        'Young',
        'Working',
        'Retired',
        'Grandparents',
        'Great Grandparents'
      ],
      image: 'Parents',
      title: 'Parents',
      url: '/folder/Parents',
    },
    {
      categories: [
        'Dating',
        'Engaged',
        'Married > 5 years',
        'Married 5 to 10 years',
        'Married 10+ years'
      ],
      image: 'Partners',
      title: 'Partners',
      url: '/folder/Partners',
    },
    { 
      categories: [
        'Nephews & Nieces',
        'Aunts & Uncles',
        'Grand Auns & Uncles',
        'Grand nephews & nieces'   
      ],
      image: 'Extended',
      title: 'Extended',
      url: '/folder/Extended',
    },
    { 
      categories: [
        'Best friends',
        'Close friends',
        'Good friends',
        'New friends',
        'Acquaintances'
      ],
      image: 'Friends',
      title: 'Friends',
      url: '/folder/Friends',
     },
  ];
  public labels = ['Bed Time', 'Homework', 'Chores', 'Cleaning', 'Hygene'];
  constructor() { }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }
}
