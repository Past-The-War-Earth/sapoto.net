import { Component } from '@angular/core';
import { Clicker } from './utils/Clicker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public themes = [{
    topics: [{
      label: 'Baby Time',
      icon: 'child_toy_icons/baby-toy.png',
      favorite: false,
    },
    {
      label: 'Toddler Years',
      icon: 'child_toy_icons/toddler-toy.png',
      favorite: true,
    },
    /*
    {
      label: 'Early Childhood',
      icon: 'child_toy_icons/early-childhood-toy.png',
      favorite: true,
    },
    */
    {
      label: 'Middle Childhood',
      icon: 'child_toy_icons/middle-childhood-toy.png',
      favorite: true,
    },
    {
      label: 'Late Childhood',
      icon: 'child_toy_icons/late-childhood-toy.png',
      favorite: false,
    },
    {
      label: 'Teenage Years',
      icon: 'child_toy_icons/teenage-game.png',
      favorite: false,
    },
    {
      label: 'Adults',
      icon: 'child_toy_icons/adult-game.png',
      favorite: false,
    }
    ],
    image: 'Children',
    title: 'Children'
  },
  {
    topics: [{
      label: 'Siblings',
      icon: null,
      favorite: false,
    }, {
      label: 'Cousins',
      icon: null,
      favorite: false,
    }],
    image: 'Siblings_n_Kin',
    title: 'Sibligs & Kin'
  },
  {
    topics: [{
      label: 'Working Parents',
      icon: null,
      favorite: false,
    }, {
      label: 'Retired Parents',
      icon: null,
      favorite: false,
    }, {
      label: 'Grandparents',
      icon: null,
      favorite: false,
    }],
    image: 'Parents',
    title: 'Parents'
  },
  {
    topics: [{
      label: 'Dating Pairs',
      icon: null,
      favorite: false,
    }, {
      label: 'Engaged Pairs',
      icon: null,
      favorite: false,
    }, {
      label: 'Married < 10 years',
      icon: null,
      favorite: false,
    }, {
      label: 'Married 10+ years',
      icon: null,
      favorite: false,
    }],
    image: 'Partners',
    title: 'Partners'
  },
  {
    topics: [{
      label: 'Nephews & Nieces',
      icon: null,
      favorite: false,
    }, {
      label: 'Aunts & Uncles',
      icon: null,
      favorite: false,
    }],
    image: 'Extended',
    title: 'Extended'
  },
  {
    topics: [{
      label: 'Best Friends',
      icon: null,
      favorite: false,
    }, {
      label: 'Close Friends',
      icon: null,
      favorite: false,
    }, {
      label: 'Good Friends',
      icon: null,
      favorite: false,
    }],
    image: 'Friends',
    title: 'Friends'
  }];

  sharedClicker = new Clicker()
  addTopic = false

  constructor(
  ) { }

  addATopic() {
    this.sharedClicker.click(() => {
      this.doAddATopic()
    })
  }

  private doAddATopic() {
    this.addTopic = true
  }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }

  isAddingATopic() {
    return !!this.addTopic
  }

  doneAddingATopic() {
    this.addTopic = false
  }
}
