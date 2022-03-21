import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() triggerElementId: string
  @Input() isOpen = false

  @Output() onDismiss = new EventEmitter()


  constructor() { }

  ngOnInit() { }

  onDismissPopover() {
    this.isOpen = false
    this.onDismiss.emit()
  }

  isPopoverOpen() {
    return this.isOpen
  }

  onOpen() {

  }

}
