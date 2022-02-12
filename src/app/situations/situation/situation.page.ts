import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.page.html',
  styleUrls: ['./situation.page.scss'],
})
export class SituationPage
  implements OnInit {

  activeReply
  replyAction
  situationAction
  showReplyActions = false
  showSituationActions = false

  situation = {
    id: 7,
    createdBy: {
      username: 'Cool Dad 1978',
      ranking: 1000
    },
    createdAt: new Date().getTime() - 90000000,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    importance: 65,
    numQuestions: 1,
    numExperiences: 1,
    numReplies: 4,
    numIdeas: 1,
    questions: [],
    designations: ['situation'],
    urgency: 32
  };

  replies = [{
    createdBy: {
      username: 'Some Cousin',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 100000000,
    id: 1,
    numReplies: 12,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    userRanking: 1,
    designations: [],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Some Aunt',
      ranking: 4000
    },
    createdAt: new Date().getTime() - 1000000000,
    id: 2,
    numReplies: 5,
    numExperiences: 1,
    questions: ['Where'],
    ratings: {
      down: 5,
      up: 1995,
      user: 1
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Why lorem ipsum dolor sit amet?`,
    designations: ['question'],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Super Cool Brother',
      ranking: 3000
    },
    createdAt: new Date().getTime() - 2000000000,
    id: 3,
    numReplies: 15,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: -1110,
      up: 10,
      user: -1
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    designations: ['experience'],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Super Cool Sister',
      ranking: 3000
    },
    createdAt: new Date().getTime() - 2000000000,
    id: 3,
    numReplies: 15,
    numExperiences: 1,
    questions: ['What'],
    ratings: {
      down: -1110,
      up: 10,
      user: -1
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    designations: ['question', 'experience'],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Super Cool Uncle',
      ranking: 9000
    },
    createdAt: new Date().getTime() - 4000000000,
    id: 4,
    numReplies: 0,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: -105,
      up: 5,
      user: 1
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Lorem ipsum dolor sit amet.`,
    designations: [],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Fuzzy Best Friend',
      ranking: 8000
    },
    createdAt: new Date().getTime() - 9000000000,
    id: 5,
    numReplies: 1,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 9,
      up: 0,
      user: 0
    },
    votes: {
      totalPoints: 0,
      users: 0,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    designations: [],
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Fuzzy Good Friend',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 6,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 250,
      users: 5,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 49,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['question', 'idea'],
    urgency: 99
  }, {
    createdBy: {
      username: 'Fuzzy Neighbor',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 7,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 250,
      users: 4,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 75
  }, {
    createdBy: {
      username: 'Fuzzy Teacher',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 8,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 450,
      users: 5,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 35,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 55
  }, {
    createdBy: {
      username: 'Fuzzy Co-Worker',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 20000000000,
    id: 9,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 550,
      users: 6,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea', 'experience'],
    urgency: 35
  }, {
    createdBy: {
      username: 'Fuzzy Sister',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 10000000000,
    id: 10,
    numReplies: 25,
    numExperiences: 1,
    questions: ['When'],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 2500,
      users: 30,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea', 'question', 'experience'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Brother',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 5000000000,
    id: 11,
    numReplies: 25,
    numExperiences: 1,
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 750,
      users: 10,
    },
    numReasons: 3,
    numIdeas: 1,
    questions: [],
    priority: 75,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 500000000,
    id: 12,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 250,
      users: 4,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 55,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 1500000000,
    id: 13,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 240,
      users: 3,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 35,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Cousin',
      ranking: 7000
    },
    createdAt: new Date().getTime() - 150000000,
    id: 14,
    numReplies: 25,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 320,
      users: 4,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 15,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }];

  constructor() {
  }

  ngOnInit() {
  }

  filter(
    filterValue: string
  ): void {
    console.log('Filter Value: ' + filterValue)
  }

  onActionsClose() {
    this.showReplyActions = false
    this.showSituationActions = false
  }

  onShowSituationActions() {
    this.activeReply = null
    this.situationAction = null
    this.showSituationActions = true
  }

  onShowReplyActions(
    reply
  ) {
    this.replyAction = null
    this.activeReply = reply
    this.showReplyActions = true
  }

  onSituationAction(
    action
  ) {
    this.situationAction = action
  }

  onReplyAction(
    action
  ) {
    this.replyAction = action
  }

  getActiveActionsReplyId() {
    if (!this.activeReply) {
      return null
    }

    return this.activeReply.id
  }

  getSituationAction() {
    if (!this.situationAction || this.activeReply) {
      return null
    }
    return this.situationAction
  }

}
