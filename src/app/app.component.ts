import { Component } from '@angular/core';
import { Clicker } from './utils/Clicker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public topics = [
    {
      favorite: true,
      name: 'Children'
    },
    {
      name: 'Work'
    },
    {
      name: 'School'
    },
    {
      name: 'Spouses'
    },
    {
      name: 'Inlaws'
    },
    {
      name: 'Friends'
    }]

  sharedClicker = new Clicker()
  addTopic = false

  constructor(
  ) { }

  addATopic() {
    this.sharedClicker.click(() => {
      this.doAddATopic()
    })
  }

  private doAddATopic() {
    this.addTopic = true
  }

  deSpace(
    name: string
  ) {
    name.replace(' ', '_')
  }

  isAddingATopic() {
    return !!this.addTopic
  }

  doneAddingATopic() {
    this.addTopic = false
  }
}
