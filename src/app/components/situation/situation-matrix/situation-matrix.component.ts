import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-situation-matrix',
  templateUrl: './situation-matrix.component.html',
  styleUrls: ['./situation-matrix.component.scss'],
})
export class SituationMatrixComponent implements OnInit {

  @Input() situation

  @Input() type

  @Output() onDone = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  showDoneOption() {
    return this.type === 'entry'
  }

  doneSizing() {
    this.onDone.emit()
  }

}
