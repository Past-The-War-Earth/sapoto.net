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

  priorityStars

  constructor(
    private eisenhowerMatrixService: EisenhowerMatrixService,
    private replyService: ReplyService
  ) { }

  ngOnInit() {
    this.priorityStars = []
    let numberOfStars = this.eisenhowerMatrixService.getPriorityNoDecimalValue(
      this.reply.eisenhowerMatrix, this.mode)

    for (let i = 0; i < numberOfStars; i++) {
      this.priorityStars.push(1)
    }
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

  isVeryLowUrgency() {
    return this.eisenhowerMatrixService.isVeryLowUrgency(
      this.reply.eisenhowerMatrix, this.mode)
  }

  isLowUrgency() {
    return this.eisenhowerMatrixService.isLowUrgency(
      this.reply.eisenhowerMatrix, this.mode)
  }

  isAverageUrgency() {
    return this.eisenhowerMatrixService.isAverageUrgency(
      this.reply.eisenhowerMatrix, this.mode)
  }

  isHighUrgency() {
    return this.eisenhowerMatrixService.isHighUrgency(
      this.reply.eisenhowerMatrix, this.mode)
  }

  isVeryHighUrgency() {
    return this.eisenhowerMatrixService.isVeryHighUrgency(
      this.reply.eisenhowerMatrix, this.mode)
  }

}
