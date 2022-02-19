import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';

@Component({
  selector: 'app-situation-actions',
  templateUrl: './situation-actions.component.html',
  styleUrls: ['./situation-actions.component.scss'],
})
export class SituationActionsComponent implements OnInit {

  @Input() situation

  @Output() onSelection = new EventEmitter()

  sharedClicker = new Clicker()

  constructor() { }

  ngOnInit() { }


  sizeSituation() {
    this.sharedClicker.click(() => {
      this.onSelection.emit('size')
    })
  }

}
