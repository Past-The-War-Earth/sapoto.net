import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.page.html',
  styleUrls: ['./reply.page.scss'],
})
export class ReplyPage
  implements OnInit {

  reply = {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 6,
    numReplies: 25,
    numSuggestions: 1,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    type: 'suggestion'
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
    numSuggestions: 1,
    priority: 95,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 95
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 7,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 95,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 75
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 8,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 95,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 55
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 9,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 95,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 35
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 10,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 95,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 25
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 11,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 75,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 25
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 12,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 55,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 25
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 13,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 35,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 25
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 15000000000,
    id: 14,
    numReplies: 25,
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    numSuggestions: 1,
    priority: 15,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    type: 'suggestion',
    urgency: 25
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
