import { Component, Input, OnInit } from '@angular/core';
import { EisenhowerMatrixService } from '../../../services/eisenhower-matrix.service';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-reply-designation-icon',
  templateUrl: './reply-designation-icon.component.html',
  styleUrls: ['./reply-designation-icon.component.scss'],
})
export class ReplyDesignationIconComponent implements OnInit {

  @Input() mode: 'edit' | 'show'

  @Input() reply

  @Input() type: 'entry' | 'listing'

  constructor(
    private eisenhowerMatrixService: EisenhowerMatrixService,
    private replyService: ReplyService
  ) { }

  ngOnInit() {
  }

  getPriorityClassName() {
    return this.eisenhowerMatrixService.getPriorityClassName(
      this.reply.eisenhowerMatrix, this.mode)
  }

  getUrgencyImageName(
    listing
  ) {
    return this.eisenhowerMatrixService.getUrgencyImageName(
      this.reply.eisenhowerMatrix, this.mode, listing
    )
  }

  getPriorityDisplayValue() {
    return this.eisenhowerMatrixService.getPriorityDisplayValue(
      this.reply.eisenhowerMatrix, this.mode)
  }

  getUrgencyDisplayValue() {
    return this.eisenhowerMatrixService.getUrgencyDisplayValue(
      this.reply.eisenhowerMatrix, this.mode)
  }

  isComment() {
    return this.replyService.isComment(this.reply)
  }

  isQuestion() {
    return this.replyService.isQuestion(this.reply)
  }

  isIdea() {
    return this.replyService.isIdea(this.reply)
  }

  isExperience() {
    return this.replyService.isExperience(this.reply)
  }

  isAQuestion() {
    return this.replyService.hasADesignation('question', this.reply)
  }

}
