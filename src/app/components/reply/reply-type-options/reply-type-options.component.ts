import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-type-options',
  templateUrl: './reply-type-options.component.html',
  styleUrls: ['./reply-type-options.component.scss'],
})
export class ReplyTypeOptionsComponent implements OnInit {

  @Input() action

  @Input() reply

  @Input() type

  @Output() onDone = new EventEmitter()

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() { }

  getQuestionTypes() {
    return this.replyService.getQuestionTypes()
  }

  showDoneOption() {
    return this.type === 'listing'
  }

  doneDesignating() {
    this.onDone.emit()
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
    return this.reply.questions.filter(
      assignedQuestionType => assignedQuestionType === questionType
    ).length === 1
  }

  onQuestionTypeClick(
    questionType
  ) {
    if (this.hasQuestionType(questionType)) {
      this.reply.questions = this.reply.questions.filter(
        assignedQuestionType => assignedQuestionType !== questionType
      )
    } else {
      this.reply.questions.push(questionType)
    }
  }

}
