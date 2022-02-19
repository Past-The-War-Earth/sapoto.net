import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { ReplyService } from '../../../services/reply.service';

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

  sharedClicker = new Clicker()

  constructor(
    private dateUtils: DateUtilsService,
    private numberUtils: NumberUtilsService,
    private replyService: ReplyService,
  ) { }

  ngOnInit() { }

  showActionsPopup() {
    this.sharedClicker.click(() => {
      this.onActionsClick.emit(this.reply)
    })
  }

  showReplyTypes() {
    return this.action === 'designate'
  }

  showIdeaReasons() {
    return this.replyService.hasADesignation('idea', this.reply)
      && this.action === 'reasonAbout'
  }

  showActionsIcon() {
    return !this.action
  }

  replyTypesDone() {
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
    if (this.reply.ratings.user >= 1) {
      return;
    }
    if (this.reply.ratings.user === -1) {
      this.reply.ratings.user++
      this.reply.ratings.down--
    }
    this.reply.ratings.up++
    this.reply.ratings.user++
  }

  unrankUp() {
    if (this.reply.ratings.user !== 1) {
      return;
    }
    this.reply.ratings.up--
    this.reply.ratings.user--
  }

  rankDown() {
    if (this.reply.ratings.user <= -1) {
      return;
    }
    if (this.reply.ratings.user === 1) {
      this.reply.ratings.user--
      this.reply.ratings.up--
    }
    this.reply.ratings.down++
    this.reply.ratings.user--
  }

  unrankDown() {
    if (this.reply.ratings.user !== -1) {
      return;
    }
    this.reply.ratings.down--
    this.reply.ratings.user++
  }

  ageOf(
    createdAt: number
  ) {
    return this.dateUtils.ageOf(createdAt)
  }

  getNumberAcronym(
    aNumber: number
  ): string {
    return this.numberUtils.getNumberAcronym(aNumber)
  }

  showMainAction() {
    return this.type === 'listing'
  }

}
