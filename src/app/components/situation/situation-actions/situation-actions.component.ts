import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-situation-actions',
  templateUrl: './situation-actions.component.html',
  styleUrls: ['./situation-actions.component.scss'],
})
export class SituationActionsComponent implements OnInit {

  @Input() situation

  @Output() onSelection = new EventEmitter()

  constructor() { }

  ngOnInit() { }


  sizeSituation() {
    this.onSelection.emit('size')
  }

}
