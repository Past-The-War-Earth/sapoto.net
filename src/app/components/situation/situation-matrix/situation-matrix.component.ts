import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-situation-matrix',
  templateUrl: './situation-matrix.component.html',
  styleUrls: ['./situation-matrix.component.scss'],
})
export class SituationMatrixComponent implements OnInit {

  @Input() situation
  @Input() type

  labelRemoved = new Subject()
  labelSelected = new Subject()

  constructor() { }

  ngOnInit() { }

  onLabelRemoved(
    label
  ) {
    this.labelRemoved.next(label)
  }

  onLabelSelected(
    labels
  ) {
    this.labelSelected.next(labels)
  }

}
