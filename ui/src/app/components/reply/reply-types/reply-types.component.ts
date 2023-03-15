import { Component, Input, OnInit } from '@angular/core';
import { QuestionType, Reply, ReplyQuestionType, Reply_Type } from '@sapoto/main';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-types',
  templateUrl: './reply-types.component.html',
  styleUrls: ['./reply-types.component.scss'],
})
export class ReplyTypesComponent implements OnInit {

  @Input() parent: Reply

  @Input() reply: Reply

  @Input() type

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() {
  }

  async getQuestionTypes(): Promise<QuestionType[]> {
    return await this.replyService.getQuestionTypes()
  }

  setDesignations(designations: Reply_Type[]) {
    this.reply.isExperience = false
    this.reply.isIdea = false
    this.reply.isQuestion = false
    for (const designation of designations) {
      switch (designation) {
        case 'experience':
          this.reply.isExperience = true
          break
        case 'idea':
          this.reply.isIdea = true
          break
        case 'question':
          this.reply.isQuestion = true
          break
      }
    }
  }

  isComment() {
    return this.replyService.isComment(this.reply)
  }

  isQuestion(): boolean {
    return this.reply.isQuestion
  }

  isIdea(): boolean {
    return this.reply.isIdea
  }

  isExperience(): boolean {
    return this.reply.isExperience
  }

  hasQuestionType(
    questionType: QuestionType
  ) {
    return this.reply.replyQuestionTypes.filter(
      assignedQuestionType => assignedQuestionType.questionType.id === questionType.id
    ).length === 1
  }

  onQuestionTypeClick(
    questionType: QuestionType
  ) {
    if (this.hasQuestionType(questionType)) {
      this.reply.replyQuestionTypes = this.reply.replyQuestionTypes.filter(
        assignedQuestionType => assignedQuestionType.questionType.id !== questionType.id
      )
    } else {
      const replyQuestionType = new ReplyQuestionType()
      replyQuestionType.reply = this.reply
      replyQuestionType.questionType = questionType
      this.reply.replyQuestionTypes.push(replyQuestionType)
    }
  }


}
