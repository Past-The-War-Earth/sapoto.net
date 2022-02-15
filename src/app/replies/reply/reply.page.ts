import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '../../services/date-utils.service';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'

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
    counts: {
      experiences: 8,
      ideas: 0,
      questions: 2,
      reasons: 9,
      replies: 38
    },
    createdAt: new Date().getTime() - 10000000000,
    createdBy: {
      username: 'Fuzzy Sister',
      ranking: 7000
    },
    designations: ['idea', 'question', 'experience'],
    eisenhowerMatrix: {
      priority: 4.7,
      urgency: 25,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 11,
    questionTypes: ['When'],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 2500,
      users: 30,
    }
  };

  replies = [{
    counts: {
      experiences: 1,
      ideas: 0,
      questions: 1,
      reasons: 0,
      replies: 12
    },
    createdAt: new Date().getTime() - 100000000,
    createdBy: {
      username: 'Some Cousin',
      ranking: 5000
    },
    designations: [],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 1,
    questionTypes: [],
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
    enim volutpat vitae.`
  }, {
    counts: {
      experiences: 2,
      ideas: 0,
      questions: 0,
      reasons: 0,
      replies: 5
    },
    createdAt: new Date().getTime() - 1000000000,
    createdBy: {
      username: 'Some Aunt',
      ranking: 4000
    },
    designations: ['question'],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 2,
    questionTypes: ['Where'],
    ratings: {
      down: 5,
      up: 1995,
      user: 1
    },
    text: `Why lorem ipsum dolor sit amet?`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
  }, {
    counts: {
      experiences: 3,
      ideas: 0,
      questions: 0,
      reasons: 0,
      replies: 15
    },
    createdAt: new Date().getTime() - 2000000000,
    createdBy: {
      username: 'Super Cool Brother',
      ranking: 3000
    },
    designations: ['experience'],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 3,
    questionTypes: [],
    ratings: {
      down: -1110,
      up: 10,
      user: -1
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
  }, {
    counts: {
      experiences: 3,
      ideas: 0,
      questions: 0,
      reasons: 0,
      replies: 12
    },
    createdAt: new Date().getTime() - 2000000000,
    createdBy: {
      username: 'Super Cool Sister',
      ranking: 3000
    },
    designations: ['question', 'experience'],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 4,
    questionTypes: ['What'],
    ratings: {
      down: -1110,
      up: 10,
      user: -1
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
  }, {
    counts: {
      experiences: 1,
      ideas: 0,
      questions: 0,
      reasons: 0,
      replies: 1
    },
    createdAt: new Date().getTime() - 4000000000,
    createdBy: {
      username: 'Super Cool Uncle',
      ranking: 9000
    },
    designations: [],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 5,
    questionTypes: [],
    ratings: {
      down: -105,
      up: 5,
      user: 1
    },
    text: `Lorem ipsum dolor sit amet.`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
  }, {
    counts: {
      experiences: 1,
      ideas: 0,
      questions: 0,
      reasons: 0,
      replies: 1
    },
    createdAt: new Date().getTime() - 9000000000,
    createdBy: {
      username: 'Fuzzy Best Friend',
      ranking: 8000
    },
    designations: [],
    eisenhowerMatrix: {
      priority: 0,
      urgency: 0,
      votes: 0,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 6,
    questionTypes: [],
    ratings: {
      down: 9,
      up: 0,
      user: 0
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
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