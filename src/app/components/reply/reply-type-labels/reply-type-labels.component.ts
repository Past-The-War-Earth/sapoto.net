import { ChangeDetectorRef, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-type-labels',
  templateUrl: './reply-type-labels.component.html',
  styleUrls: ['./reply-type-labels.component.scss'],
})
export class ReplyTypeLabelsComponent implements OnInit {

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

  @Output() onSelection = new EventEmitter()

  constructor(
    // private injector: Injector
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
    const selections = []
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

}
