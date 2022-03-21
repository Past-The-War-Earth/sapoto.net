import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';

@Component({
  selector: 'app-situation-matrix-modal',
  templateUrl: './situation-matrix-modal.component.html',
  styleUrls: ['./situation-matrix-modal.component.scss'],
})
export class SituationMatrixModalComponent implements OnInit {

  @Input() situation

  @Output() onDone = new EventEmitter()

  sharedClicker = new Clicker()
  visible = true

  constructor() { }

  ngOnInit() { }

  updateSituation() {
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
