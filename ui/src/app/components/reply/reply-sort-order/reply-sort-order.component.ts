import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-sort-order',
  templateUrl: './reply-sort-order.component.html',
  styleUrls: ['./reply-sort-order.component.scss'],
})
export class ReplySortOrderComponent implements OnInit {

  @Output() onSelection = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  sortBy(
    sortType
  ) {
    this.onSelection.emit(sortType)
  }

}
