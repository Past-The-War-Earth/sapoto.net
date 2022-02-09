import { Component, Input, OnInit } from '@angular/core';
import { SituationService } from '../../../services/situation.service';

@Component({
  selector: 'app-suggestion-icon',
  templateUrl: './suggestion-icon.component.html',
  styleUrls: ['./suggestion-icon.component.scss'],
})
export class SuggestionIconComponent implements OnInit {

  @Input() suggestion

  @Input() type: 'entry' | 'listing'

  constructor(
    private situationService: SituationService
  ) { }

  ngOnInit() {
  }

  getPriorityClassName(
    priority
  ) {
    return this.situationService.getPriorityClassName(priority)
  }

  getPriorityLevelActive(
    priority,
    level
  ) {
    return this.situationService.getPriorityLevelActive(priority, level)
  }

  getUrgencyClassName(
    urgency
  ) {
    return this.situationService.getUrgencyClassName(urgency)
  }

  getUrgencyImageName(
    urgency,
    listing
  ) {
    return this.situationService.getUrgencyImageName(urgency, listing)
  }

}
