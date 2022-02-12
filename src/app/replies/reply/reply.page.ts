import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.page.html',
  styleUrls: ['./reply.page.scss'],
})
export class ReplyPage
  implements OnInit {

  activeReply
  replyAction
  showReplyActions = false

  reply = {
    createdBy: {
      username: 'Fuzzy Sister',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 6,
    numReplies: 25,
    numIdeas: 1,
    numExperiences: 1,
    questions: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    votes: {
      totalPoints: 250,
      users: 3,
    },
    numReasons: 3,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    designations: ['idea'],
    priority: 20,
    urgency: 20,
  };

  reasons = [{

  }, {

  }]

  replies = [{
    createdBy: {
      username: 'Some Cousin',
      ranking: 3000
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
      username: 'Super Cool Uncle',
      ranking: 4000
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
      username: 'Super Cool Aunt',
      ranking: 5000
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
      username: 'Fuzzy Neighbor',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 9000000000,
    designations: [],
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
    priority: 20,
    urgency: 20
  }, {
    createdBy: {
      username: 'Fuzzy Dady',
      ranking: 5000
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
      users: 4,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 95
  }, {
    createdBy: {
      username: 'Fuzzy Co-Worker',
      ranking: 2000
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
      totalPoints: 350,
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
      ranking: 2000
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
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 55
  }, {
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
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
    designations: ['idea'],
    urgency: 35
  }, {
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 10,
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
      users: 6,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 95,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
    id: 11,
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
    priority: 75,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
    urgency: 25
  }, {
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
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
      totalPoints: 320,
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
      username: 'Fuzzy Dad',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
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
      totalPoints: 950,
      users: 12,
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
      username: 'Fuzzy Mommy',
      ranking: 2000
    },
    createdAt: new Date().getTime() - 15000000000,
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
      totalPoints: 1250,
      users: 16,
    },
    numReasons: 3,
    numIdeas: 1,
    priority: 15,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    designations: ['idea'],
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

  onActionsClose() {
    this.showReplyActions = false
  }

  onShowReplyActions(
    reply
  ) {
    this.replyAction = null
    this.activeReply = reply
    this.showReplyActions = true
  }

  onReplyAction(
    action
  ) {
    this.replyAction = action
  }

  ageOf(
    createdAt: number
  ) {
    return this.dateUtils.ageOf(createdAt)
  }

  areDesignationsOpen() {
    return this.activeReply && this.reply.id === this.activeReply.id
  }

  getActiveActionsReplyId() {
    if (!this.activeReply) {
      return null
    }

    return this.activeReply.id
  }

  getReplyAction() {
    if (!this.replyAction || this.getActiveActionsReplyId() !== this.reply.id) {
      return null
    }
    return this.replyAction
  }

}