import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.page.html',
  styleUrls: ['./situation.page.scss'],
})
export class SituationPage
  implements OnInit {

  situation = {
    id: 7,
    createdBy: 'Cool Dad 1978',
    createdAt: new Date().getTime() - 90000000,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    numQuestions: 1,
    numTestimonials: 1,
    numTasks: 1,
    summary: `This is a rather long summary of the Situation at hand`,
    views: {
      total: 500,
      users: 49
    },
    type: 'situation'
  };

  replies = [{
    createdBy: 'Some Dad',
    createdAt: new Date().getTime() - 100000000,
    id: 1,
    numReplies: 12,
    ranking: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    userRanking: 1,
    type: 'comment'
  }, {
    createdBy: 'Some Mom',
    createdAt: new Date().getTime() - 1000000000,
    id: 2,
    numReplies: 5,
    ranking: {
      down: 5,
      up: 1995,
      user: 1
    },
    text: `Why lorem ipsum dolor sit amet?`,
    type: 'question'
  }, {
    createdBy: 'Super Cool Dad',
    createdAt: new Date().getTime() - 2000000000,
    id: 3,
    numReplies: 15,
    ranking: {
      down: -1110,
      up: 10,
      user: -1
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'testimonial'
  }, {
    createdBy: 'Super Cool Mom',
    createdAt: new Date().getTime() - 4000000000,
    id: 4,
    numReplies: 0,
    ranking: {
      down: -105,
      up: 5,
      user: 1
    },
    text: `Lorem ipsum dolor sit amet.`,
    type: 'comment'
  }, {
    createdBy: 'Fuzzy Dady',
    createdAt: new Date().getTime() - 9000000000,
    id: 5,
    numReplies: 1,
    ranking: {
      down: 9,
      up: 0,
      user: 0
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    type: 'comment'
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 6,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numTasks: 1,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'task'
  }, {
    createdBy: 'Chill Grandpa',
    createdAt: new Date().getTime() - 300000000000,
    id: 7,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numTasks: 1,
    views: {
      total: 50,
      users: 5
    },
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation'
  }];

  constructor(
    private dateUtils: DateUtilsService
  ) {
  }

  ngOnInit() {
  }

  filter(
    filterValue: string
  ): void {
    console.log('Filter Value: ' + filterValue)
  }

  ageOf(
    createdAt: number
  ) {
    return this.dateUtils.ageOf(createdAt)
  }

}
