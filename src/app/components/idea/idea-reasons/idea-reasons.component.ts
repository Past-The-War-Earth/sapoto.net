import { Component, Input, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-idea-reasons',
  templateUrl: './idea-reasons.component.html',
  styleUrls: ['./idea-reasons.component.scss'],
})
export class IdeaReasonsComponent implements OnInit {

  @Input() idea

  constructor() { }

  ngOnInit() { }

  trackByReasons(index, reason) {
    return reason.id
  }

  doReorder(ev) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', JSON.stringify(this.idea.reasons));

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.idea.reasons = ev.detail.complete(this.idea.reasons);

    // After complete is called the items will be in the new order
    console.log('Before complete', JSON.stringify(this.idea.reasons));
  }

}
