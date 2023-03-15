import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { Reply } from '@sapoto/main';

@Component({
  selector: 'app-reply-block',
  templateUrl: './reply-block.component.html',
  styleUrls: ['./reply-block.component.scss'],
})
export class ReplyBlockComponent implements OnInit {

  @Input() actionsTriggerElementId
  @Input() activeActionsReplyId
  @Input() reply: Reply
  @Input() type

  @Output() onActionsClick = new EventEmitter()

  sharedClicker = new Clicker()

  constructor(
    private dateUtils: DateUtilsService,
    private numberUtils: NumberUtilsService,
  ) { }

  ngOnInit() { }

  showActionsPopup() {
    this.sharedClicker.click(() => {
      this.onActionsClick.emit(this.reply)
    })
  }

  showReplies(): boolean {
    return this.reply.childReplies && !!this.reply.childReplies.length
  }

  trackByReplies(index, reply) {
    return reply.id
  }

  setDesignatedReply(
    reply
  ) {
    this.activeActionsReplyId = reply.id
    this.onActionsClick.emit(reply)
  }

  addAnswer(question) {
    console.log('Adding an Answer...')
  }

  addReply(commentOrExperience) {
    console.log('Adding a Reply...')
  }

  rankUp() {
    if (this.reply.userReplyRating.upOrDownRating >= 1) {
      return;
    }
    if (this.reply.userReplyRating.upOrDownRating === -1) {
      this.reply.userReplyRating.upOrDownRating = 0
      this.reply.numberOfDownRatings--
      this.reply.numberRatings--
    } else {
      this.reply.userReplyRating.upOrDownRating = 1
      this.reply.numberOfUpRatings++
      this.reply.numberRatings++
    }
  }

  unrankUp() {
    if (this.reply.userReplyRating.upOrDownRating !== 1) {
      return;
    }
    this.reply.userReplyRating.upOrDownRating = 0
    this.reply.numberOfUpRatings--
    this.reply.numberRatings--
  }

  rankDown() {
    if (this.reply.userReplyRating.upOrDownRating <= -1) {
      return;
    }
    if (this.reply.userReplyRating.upOrDownRating === 1) {
      this.reply.userReplyRating.upOrDownRating = 0
      this.reply.numberOfUpRatings--
      this.reply.numberRatings--
    } else {
      this.reply.userReplyRating.upOrDownRating = -1
      this.reply.numberOfDownRatings++
      this.reply.numberRatings++
    }
  }

  unrankDown() {
    if (this.reply.userReplyRating.upOrDownRating !== -1) {
      return;
    }
    this.reply.userReplyRating.upOrDownRating = 0
    this.reply.numberOfDownRatings--
    this.reply.numberRatings--
  }

  ageOf(
    createdAt: Date
  ) {
    return this.dateUtils.ageOf(createdAt.getTime())
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
