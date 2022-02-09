import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DateUtilsService } from 'src/app/services/date-utils.service';
import { NumberUtilsService } from 'src/app/services/number-utils.service';

@Component({
  selector: 'app-reply-listing',
  templateUrl: './reply-listing.component.html',
  styleUrls: ['./reply-listing.component.scss'],
})
export class ReplyListingComponent implements OnInit {

  @Input() replies;

  filteredReplies

  filter = 'all'

  constructor(
    private dateUtils: DateUtilsService,
    private menu: MenuController,
    private numberUtils: NumberUtilsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filteredReplies = this.replies
  }

  showAll() {
    this.filteredReplies = this.replies;
    this.filter = 'all'
  }

  showQuestions() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'question');
    this.filter = 'question'
  }

  showComments() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'comment');
    this.filter = 'comment'
  }

  showTestimonials() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'testimonial');
    this.filter = 'testimonial'
  }

  showReplies() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'suggestion');
    this.filter = 'suggestion'
  }

  filterListing($event) {

  }

  trackByReplies(index, reply) {
    return reply.id
  }

  addAnswer(question) {
    console.log('Adding an Answer...')
  }

  addReply(commentOrTestimonial) {
    console.log('Adding a Reply...')
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

  add() {
    this.router.navigate(['post-suggestion']);
  }

}
