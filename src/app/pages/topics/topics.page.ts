import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  public topics = [
    {
      favorite: true,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      imageUrl: 'assets/topics/children.jpg',
      name: 'Children'
    },
    {
      favorite: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae.`,
      imageUrl: 'assets/topics/work.jpg',
      name: 'Work'
    },
    {
      favorite: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
      imageUrl: 'assets/topics/school.jpg',
      name: 'School'
    },
    {
      favorite: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      imageUrl: 'assets/topics/spouses.jpg',
      name: 'Spouses'
    },
    {
      favorite: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae.`,
      imageUrl: 'assets/topics/inlaws.jpg',
      name: 'Inlaws'
    },
    {
      favorite: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
      enim volutpat vitae.`,
      imageUrl: 'assets/topics/friends.jpg',
      name: 'Friends'
    }]

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(
    topic
  ) {
    topic.favorite = !topic.favorite
  }

}
