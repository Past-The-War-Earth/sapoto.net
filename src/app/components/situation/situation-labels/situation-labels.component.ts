import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-situation-labels',
  templateUrl: './situation-labels.component.html',
  styleUrls: ['./situation-labels.component.scss'],
})
export class SituationLabelsComponent implements OnInit, OnDestroy {

  @Input() editMode = false
  @Input() labelSelected: Subject<any>
  @Input() situation

  @Output() onLabelRemoved = new EventEmitter()

  labelSelectedSubscription: Subscription

  labels

  constructor() { }

  ngOnInit() {
    if (this.labelSelected) {
      this.labelSelectedSubscription
        = this.labelSelected.subscribe(labels => this.setLabels(labels))
    }
    this.labels = this.situation.labels
  }

  ngOnDestroy(): void {
    if (this.labelSelectedSubscription) {
      this.labelSelectedSubscription.unsubscribe()
    }
  }

  setLabels(
    labels
  ) {
    this.labels = [
      ...labels
    ]
    this.situation.labels = this.labels
  }

  trackByLabels(index, label) {
    return label.id
  }

  onRemove(
    label
  ) {
    this.labels = this.labels.filter(aLabel =>
      label.id !== aLabel.id)
    this.situation.labels = this.labels
    this.onLabelRemoved.emit(label)
  }

}
