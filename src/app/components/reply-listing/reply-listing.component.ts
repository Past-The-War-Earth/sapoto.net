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

  constructor(
    private dateUtils: DateUtilsService,
    private menu: MenuController,
    private numberUtils: NumberUtilsService,
    private router: Router
  ) { }

  ngOnInit() { }

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

}
