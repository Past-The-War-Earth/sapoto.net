import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-situation-matrix-modal',
  templateUrl: './situation-matrix-modal.component.html',
  styleUrls: ['./situation-matrix-modal.component.scss'],
})
export class SituationMatrixModalComponent implements OnInit {

  @Input() situation

  @Output() onDone = new EventEmitter()

  visible = true

  constructor() { }

  ngOnInit() { }

  updateSituation() {
    this.hide()
  }

  cancel() {
    this.hide()
  }

  done() {
    this.onDone.emit()
  }

  private hide() {
    this.visible = false
    setTimeout(() => {
      this.onDone.emit()
    })
  }

}
