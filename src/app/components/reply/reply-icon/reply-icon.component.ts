import { Component, Input, OnInit } from '@angular/core';
import { EisenhowerMatrixService } from '../../../services/eisenhower-matrix.service';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-reply-icon',
  templateUrl: './reply-icon.component.html',
  styleUrls: ['./reply-icon.component.scss'],
})
export class ReplyIconComponent implements OnInit {

  @Input() mode: 'edit' | 'show'

  @Input() reply

  @Input() type: 'entry' | 'listing'

  priorityPoints
  halfPriorityPoint = false
  halfUrgencyPoint = false
  urgencyPoints

  constructor(
    private eisenhowerMatrixService: EisenhowerMatrixService,
    private replyService: ReplyService
  ) { }

  ngOnInit() {
    this.priorityPoints = []
    let priorityDisplayValue = this.eisenhowerMatrixService.getPriorityDisplayValue(
      this.reply.eisenhowerMatrix, this.mode)

    const wholePriorityValue: any = priorityDisplayValue.substring(0, 1)
    if (priorityDisplayValue.endsWith(".5")) {
      this.halfPriorityPoint = true
    }

    for (let i = 0; i < wholePriorityValue; i++) {
      this.priorityPoints.push(1)
    }

    this.urgencyPoints = []
    let urgencyDisplayValue = this.eisenhowerMatrixService.getUrgencyDisplayValue(
      this.reply.eisenhowerMatrix, this.mode)

    const wholeUrgencyValue: any = urgencyDisplayValue.substring(0, 1)
    if (urgencyDisplayValue.endsWith(".5")) {
      this.halfUrgencyPoint = true
    }

    for (let i = 0; i < wholeUrgencyValue; i++) {
      this.urgencyPoints.push(1)
    }
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
