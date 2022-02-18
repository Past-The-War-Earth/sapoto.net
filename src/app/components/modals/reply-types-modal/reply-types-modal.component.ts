import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  visible = true

  constructor() { }

  ngOnInit() { }

  changeType() {
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
