import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  @Input() menuId

  @Input() showPostSituation

  @Input() title

  @Output() onPostSituation = new EventEmitter()

  sharedClicker = new Clicker()

  constructor() { }

  ngOnInit() {
  }

  postSituation() {
    this.sharedClicker.click(() => {
      this.onPostSituation.emit()
    })
  }

  showToolsIcon() {
    return !!this.menuId
  }

}
