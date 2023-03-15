import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reply, Reply_Type } from '@sapoto/main';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-reply-type-labels',
  templateUrl: './reply-type-labels.component.html',
  styleUrls: ['./reply-type-labels.component.scss'],
})
export class ReplyTypeLabelsComponent implements OnInit {

  @Input() parent: Reply

  @Input() type

  selected = this.getDefaultState()

  @Input()
  set reply(
    reply
  ) {
    this.selected = this.getDefaultState()
    for (let designation of reply.designations) {
      switch (designation) {
        case 'question':
          this.selected.question = true;
          break;
        case 'idea':
          this.selected.idea = true;
          break;
        case 'experience':
          this.selected.experience = true;
          break;
      }
    }

    // const changeDetectorRef = this.injector.get(ChangeDetectorRef);
    // changeDetectorRef.detectChanges();
  }

  @Output() onSelection = new EventEmitter<Reply_Type[]>()

  constructor(
    // private injector: Injector
    private replyService: ReplyService
  ) { }

  ngOnInit() { }

  onQuestionClick() {
    this.selected.question = !this.selected.question
    this.emitSelections()
  }

  onIdeaClick() {
    this.selected.idea = !this.selected.idea
    this.emitSelections()
  }

  onExperienceClick() {
    this.selected.experience = !this.selected.experience
    this.emitSelections()
  }

  private emitSelections() {
    const selections: Reply_Type[] = []
    if (this.selected.question) {
      selections.push('question')
    }
    if (this.selected.idea) {
      selections.push('idea')
    }
    if (this.selected.experience) {
      selections.push('experience')
    }

    this.onSelection.emit(selections)
  }

  private getDefaultState() {
    return {
      question: false,
      idea: false,
      experience: false
    }
  }

  canBeNonGeneric() {
    return this.canBeAnIdea() || this.canBeAnExperience() || this.canBeAQuestion()
  }

  canBeAnIdea() {
    return this.replyService.canHaveIdeas(this.parent)
  }

  canBeAnExperience() {
    return this.replyService.canHaveExperiences(this.parent)
  }

  canBeAQuestion() {
    return this.replyService.canHaveQuestions(this.parent)
  }

}
