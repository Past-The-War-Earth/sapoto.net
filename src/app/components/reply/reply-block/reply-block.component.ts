import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DateUtilsService } from 'src/app/services/date-utils.service';
import { NumberUtilsService } from 'src/app/services/number-utils.service';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-block',
  templateUrl: './reply-block.component.html',
  styleUrls: ['./reply-block.component.scss'],
})
export class ReplyBlockComponent implements OnInit {

  @Input() action
  @Input() actionsTriggerElementId
  @Input() reply
  @Input() type

  @Output() onActionsClick = new EventEmitter()


  constructor(
    private dateUtils: DateUtilsService,
    private numberUtils: NumberUtilsService,
    private replyService: ReplyService,
    private router: Router
  ) { }

  ngOnInit() { }

  showActionsPopup() {
    this.onActionsClick.emit(this.reply)
  }

  showReplyTypeOptions() {
    return this.action === 'designate'
  }

  showReasons() {
    return this.action === 'reason'
  }

  showActionsIcon() {
    return !this.action
  }

  replyTypeOptionsDone() {
    this.action = null
  }

  hasAnyOfDesignations(
    designations,
    reply
  ) {
    return this.replyService.hasAnyOfDesignations(designations, reply)
  }

  hasADesignation(
    designations,
    reply
  ) {
    return this.replyService.hasADesignation(designations, reply)
  }

  addAnswer(question) {
    console.log('Adding an Answer...')
  }

  addReply(commentOrExperience) {
    console.log('Adding a Reply...')
  }

  rankUp() {
    if (this.reply.ranking.user >= 1) {
      return;
    }
    if (this.reply.ranking.user === -1) {
      this.reply.ranking.user++
      this.reply.ranking.down--
    }
    this.reply.ranking.up++
    this.reply.ranking.user++
  }

  unrankUp() {
    if (this.reply.ranking.user !== 1) {
      return;
    }
    this.reply.ranking.up--
    this.reply.ranking.user--
  }

  rankDown() {
    if (this.reply.ranking.user <= -1) {
      return;
    }
    if (this.reply.ranking.user === 1) {
      this.reply.ranking.user--
      this.reply.ranking.up--
    }
    this.reply.ranking.down++
    this.reply.ranking.user--
  }

  unrankDown() {
    if (this.reply.ranking.user !== -1) {
      return;
    }
    this.reply.ranking.down--
    this.reply.ranking.user++
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
    this.router.navigate(['post-idea']);
  }

  showMainAction() {
    return this.type === 'listing'
  }

}
