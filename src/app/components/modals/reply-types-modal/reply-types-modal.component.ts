import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';

@Component({
  selector: 'app-reply-types-modal',
  templateUrl: './reply-types-modal.component.html',
  styleUrls: ['./reply-types-modal.component.scss'],
})
export class ReplyTypesModalComponent implements OnInit {

  @Input() action

  @Input() parent

  @Input() reply

  @Input() type

  @Output() onDone = new EventEmitter()

  sharedClicker = new Clicker()
  visible = true

  constructor() { }

  ngOnInit() { }

  updateReply() {
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
