import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISituation } from '@sapoto/core';
import { SituationThread } from '@sapoto/main';
import { Clicker } from '../../../utils/Clicker';

@Component({
  selector: 'app-situation-actions',
  templateUrl: './situation-actions.component.html',
  styleUrls: ['./situation-actions.component.scss'],
})
export class SituationActionsComponent implements OnInit {

  @Input() situationThread: SituationThread

  @Output() onReply = new EventEmitter()

  @Output() onSelection = new EventEmitter()

  sharedClicker = new Clicker()

  constructor() { }

  ngOnInit() { }

  doReply() {
    this.sharedClicker.click(() => {
      this.onReply.emit('reply')
    })
  }

  sizeSituation() {
    this.sharedClicker.click(() => {
      this.onSelection.emit('size')
    })
  }

}
