import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReasonService } from '../../../services/reason.service';

@Component({
  selector: 'app-idea-reasons',
  templateUrl: './idea-reasons.component.html',
  styleUrls: ['./idea-reasons.component.scss'],
})
export class IdeaReasonsComponent implements OnInit {

  @Input() idea
  @Input() type

  @Output() onDone = new EventEmitter()

  constructor(
    private reasonService: ReasonService
  ) { }

  ngOnInit() { }

  showDoneOptions() {
    return this.type === 'listing'
  }

  doneDesignating() {
    this.onDone.emit()
  }

  trackByReasons(index, reason) {
    return reason.id
  }

  doReorder(ev) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    // console.log('Before complete', JSON.stringify(this.idea.reasons));
    this.idea.reasons = ev.detail.complete(this.idea.reasons);
    // console.log('After complete', JSON.stringify(this.idea.reasons));
  }

  getScore() {
    return this.reasonService.getTotalScoreAndUpdateReasonScores(this.idea.reasons)
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

  addReason() {

  }

}
