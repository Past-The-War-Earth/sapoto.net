import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-type-options',
  templateUrl: './reply-type-options.component.html',
  styleUrls: ['./reply-type-options.component.scss'],
})
export class ReplyTypeOptionsComponent implements OnInit {

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
