import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DateUtilsService } from '../services/date-utils.service';
import { NumberUtilsService } from '../services/number-utils.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.page.html',
  styleUrls: ['./situation.page.scss'],
})
export class SituationPage implements OnInit {

  addingAComment = false
  addingAQuestion = false
  addingARelatedSituation = false
  addingATask = false
  addingATestimonial = false

  filterValue = ''

  situation = {
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
    }
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
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
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
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation'
  }];

  constructor(
    private dateUtils: DateUtilsService,
    private menu: MenuController,
    private numberUtils: NumberUtilsService
  ) { }

  ngOnInit() {
  }

  onFilterKeyPress(event) {
    if (event.keyCode === 13) {
      console.log('Enter is pressed')
      this.menu.close('situation')
      return
    }
    setTimeout(() => {
      console.log('Filter Value: ' + this.filterValue)
    }, 100)
  }

  addQuestion() {
    console.log('Adding a Question...')
    this.addingAQuestion = true
  }

  addReply(commentOrTestimonial) {
    console.log('Adding a Reply...')
  }

  addAnswer(question) {
    console.log('Adding an Answer...')
  }

  addTestimonial() {
    console.log('Adding a Testimonial...')
    this.addingATestimonial = true
  }

  addTask() {
    console.log('Adding a Task...')
    this.addingATask = true
  }

  addComment() {
    console.log('Adding a Comment...')
    this.addingAComment = true
  }

  addRelatedSituation() {
    console.log('Adding a Related Situation...')
    this.addingARelatedSituation = true
  }

  goToQuestions() {
    if (this.addingAQuestion) {
      this.addingAQuestion = false
      return
    }
    console.log('Going to Questions...')
  }

  goToAll() {
    console.log('Going to All...')
  }

  goToTestimonials() {
    if (this.addingATestimonial) {
      this.addingATestimonial = false
      return
    }
    console.log('Going to Testimonials...')
  }

  goToComments() {
    if (this.addingAComment) {
      this.addingAComment = false
      return
    }
    console.log('Going to Comments...')
  }

  goToTasks() {
    if (this.addingATask) {
      this.addingATask = false
      return
    }
    console.log('Going to Tasks...')
  }

  goToRelatedSituations() {
    if (this.addingARelatedSituation) {
      this.addingARelatedSituation = false
      return
    }
    console.log('Going to Related Situations...')
  }

  sortChronologically() {
    console.log('Sorting Chronologically...')
  }

  sortByUserRating() {
    console.log('Sorting By User Rating...')
  }

  sortByPostRanking() {
    console.log('Sorting By Post Ranking...')
  }

  segmentChanged($event) {

  }

  trackByReplies(index, comment) {
    return comment.id
  }

  rankUp(
    reply
  ) {
    if (reply.ranking.user >= 1) {
      return;
    }
    if (reply.ranking.user === -1) {
      reply.ranking.user++
      reply.ranking.down--
    }
    reply.ranking.up++
    reply.ranking.user++
  }

  unrankUp(
    reply
  ) {
    if (reply.ranking.user !== 1) {
      return;
    }
    reply.ranking.up--
    reply.ranking.user--
  }

  rankDown(
    reply
  ) {
    if (reply.ranking.user <= -1) {
      return;
    }
    if (reply.ranking.user === 1) {
      reply.ranking.user--
      reply.ranking.up--
    }
    reply.ranking.down++
    reply.ranking.user--
  }

  unrankDown(
    reply
  ) {
    if (reply.ranking.user !== -1) {
      return;
    }
    reply.ranking.down--
    reply.ranking.user++
  }

  votePercentage(totalPoints, numUsers) {
    return Math.ceil(totalPoints / numUsers)
  }

  ageOf(
    createdAt: number
  ) {
    return this.dateUtils.ageOf(createdAt)
  }

  getNumberAcronym(
    ranking: number
  ): string {
    return this.numberUtils.getNumberAcronym(ranking)
  }

}
