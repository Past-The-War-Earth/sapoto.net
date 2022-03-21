import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-types',
  templateUrl: './reply-types.component.html',
  styleUrls: ['./reply-types.component.scss'],
})
export class ReplyTypesComponent implements OnInit {

  @Input() parent

  @Input() reply

  @Input() type

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() {
  }

  getQuestionTypes() {
    return this.replyService.getQuestionTypes()
  }

  setDesignations(designations) {
    this.reply.designations = designations
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

  hasQuestionType(
    questionType
  ) {
    return this.reply.questionTypes.filter(
      assignedQuestionType => assignedQuestionType === questionType
    ).length === 1
  }

  onQuestionTypeClick(
    questionType
  ) {
    if (this.hasQuestionType(questionType)) {
      this.reply.questionTypes = this.reply.questionTypes.filter(
        assignedQuestionType => assignedQuestionType !== questionType
      )
    } else {
      this.reply.questionTypes.push(questionType)
    }
  }


}
