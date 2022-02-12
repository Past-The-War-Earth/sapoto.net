import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  actionPopoverOpen = false

  constructor() { }


  onDismiss() {
    this.actionPopoverOpen = false
  }

  isOpen() {
    return this.actionPopoverOpen
  }

  onOpen() {

  }

}
