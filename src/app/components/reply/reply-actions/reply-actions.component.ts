import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-actions',
  templateUrl: './reply-actions.component.html',
  styleUrls: ['./reply-actions.component.scss'],
})
export class ReplyActionsComponent implements OnInit {

  @Input() reply

  @Output() onSelection = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  onDesignate() {
    this.onSelection.emit('designate')
  }

}
