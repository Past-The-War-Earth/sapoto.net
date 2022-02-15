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
    counts: {
      experiences: 1,
      ideas: 1,
      questions: 1,
      reasons: 1,
      replies: 4
    },
    createdAt: new Date().getTime() - 90000000,
    createdBy: {
      username: 'Cool Dad 1978',
      ranking: 1000
    },
    eisenhowerMatrix: {
      importance: 70,
      urgency: 88,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 7,
    labels: [{
      id: 1,
      text: 'abc label'
    }, {
      id: 3,
      text: 'cde - THE COOLEST LABEL'
    }],
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
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
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
    enim volutpat vitae.`,
    votes: {
      totalPoints: 0,
      users: 0,
    }
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
  }, {
    counts: {
      experiences: 4,
      ideas: 0,
      questions: 0,
      reasons: 3,
      replies: 23
    },
    createdAt: new Date().getTime() - 15000000000,
    createdBy: {
      username: 'Fuzzy Good Friend',
      ranking: 7000
    },
    designations: ['question', 'idea'],
    eisenhowerMatrix: {
      priority: 35,
      urgency: 11,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 7,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 250,
      users: 5,
    }
  }, {
    counts: {
      experiences: 5,
      ideas: 0,
      questions: 4,
      reasons: 6,
      replies: 32
    },
    createdAt: new Date().getTime() - 15000000000,
    createdBy: {
      username: 'Fuzzy Neighbor',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 24,
      urgency: 50,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 8,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 250,
      users: 4,
    },
  }, {
    counts: {
      experiences: 4,
      ideas: 0,
      questions: 2,
      reasons: 5,
      replies: 18
    },
    createdAt: new Date().getTime() - 15000000000,
    createdBy: {
      username: 'Fuzzy Teacher',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 129,
      urgency: 96,
      votes: 30,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 9,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 450,
      users: 5,
    }
  }, {
    counts: {
      experiences: 1,
      ideas: 1,
      questions: 1,
      reasons: 1,
      replies: 25
    },
    createdAt: new Date().getTime() - 20000000000,
    createdBy: {
      username: 'Fuzzy Co-Worker',
      ranking: 2000
    },
    designations: ['idea', 'experience'],
    eisenhowerMatrix: {
      priority: 95,
      urgency: 35,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 10,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 550,
      users: 6,
    }
  }, {
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
  }, {
    counts: {
      experiences: 4,
      ideas: 0,
      questions: 6,
      reasons: 9,
      replies: 35
    },
    createdAt: new Date().getTime() - 5000000000,
    createdBy: {
      username: 'Fuzzy Brother',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 35,
      urgency: 45,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 12,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 750,
      users: 10,
    }
  }, {
    counts: {
      experiences: 5,
      ideas: 0,
      questions: 7,
      reasons: 5,
      replies: 19
    },
    createdAt: new Date().getTime() - 500000000,
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 109,
      urgency: 130,
      votes: 30,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 13,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 250,
      users: 4
    }
  }, {
    counts: {
      experiences: 2,
      ideas: 0,
      questions: 1,
      reasons: 3,
      replies: 13
    },
    createdAt: new Date().getTime() - 1500000000,
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 30,
      urgency: 39,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 14,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 240,
      users: 3,
    }
  }, {
    counts: {
      experiences: 4,
      ideas: 0,
      questions: 2,
      reasons: 4,
      replies: 16
    },
    createdAt: new Date().getTime() - 150000000,
    createdBy: {
      username: 'Fuzzy Cousin',
      ranking: 7000
    },
    designations: ['idea'],
    eisenhowerMatrix: {
      priority: 38,
      urgency: 42,
      votes: 10,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 15,
    questionTypes: [],
    ratings: {
      down: 0,
      user: 1,
      up: 234,
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae.`,
    votes: {
      totalPoints: 320,
      users: 4,
    }
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
