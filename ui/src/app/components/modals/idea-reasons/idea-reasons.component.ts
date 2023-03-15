import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { ReasonService } from '../../../services/reason.service';
import { SituationIdea } from '@votecube/votecube';

@Component({
  selector: 'app-idea-reasons',
  templateUrl: './idea-reasons.component.html',
  styleUrls: ['./idea-reasons.component.scss'],
})
export class IdeaReasonsComponent implements OnInit {

  @Input() situationIdea: SituationIdea
  @Input() type

  @Output() onDone = new EventEmitter()

  addingAReason = false
  newReason
  sharedClicker = new Clicker()
  visible = true


  constructor(
    private reasonService: ReasonService
  ) { }

  ngOnInit() { }

  showAddReason() {
    this.newReason = this.reasonService.getNewReason()
    this.addingAReason = true;
  }

  isAddingAReason() {
    return this.addingAReason;
  }

  addAReason() {
    this.sharedClicker.click(() => {
      this.addingAReason = false;
    })
  }

  // showDoneOptions() {
  //   return this.type === 'listing'
  // }

  trackByReasons(index, reason) {
    return reason.id
  }

  doReorder(ev) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    // console.log('Before complete', JSON.stringify(this.idea.reasons));
    this.situationIdea.situationIdeaReasons =
      ev.detail.complete(this.situationIdea.situationIdeaReasons);
    // console.log('After complete', JSON.stringify(this.idea.reasons));
  }

  getScore() {
    return this.reasonService.getTotalScoreAndUpdateReasonScores(
      this.situationIdea.situationIdeaReasons)
  }

  changeEnabled(
    reason
  ) {
    // reason.enabled = !reason.enabled
  }

  getVerb(
    reason
  ) {
    return this.reasonService.getVerb(reason)
  }

  save() {
    this.sharedClicker.click(() => {
      this.hide()
    })
  }

  cancel() {
    this.sharedClicker.click(() => {
      this.hide()
    })
  }

  private hide() {
    this.visible = false
    setTimeout(() => {
      this.onDone.emit()
    })
  }

}
