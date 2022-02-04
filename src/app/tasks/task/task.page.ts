import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage
  implements OnInit {

  task = {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 6,
    numReplies: 25,
    numTasks: 1,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    type: 'task'
  };

  reasons = [{

  }, {

  }]

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
