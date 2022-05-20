import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITheme, ITopic } from '@sapoto/core-client';
import { ThemeService } from './services/theme.service';
import { Clicker } from './utils/Clicker';
import { encodeId } from '@airport/aviation-communication'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public themes: ITheme[] = [];

  sharedClicker = new Clicker()
  addTopic = false

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.load().then()
  }

  async load() {
    this.themes = await this.themeService.getThemes()
  }

  goToTopicListing(
    topic: ITopic
  ) {
    this.router.navigate(['situation-list/topic', encodeId(topic)])
  }

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
