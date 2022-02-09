import { Component, Input, OnInit } from '@angular/core';
import { SituationService } from '../../../services/situation.service';

@Component({
  selector: 'app-situation-icon',
  templateUrl: './situation-icon.component.html',
  styleUrls: ['./situation-icon.component.scss'],
})
export class SituationIconComponent implements OnInit {

  @Input() situation;

  @Input() type: 'entry' | 'listing';

  constructor(
    private situationService: SituationService
  ) { }

  ngOnInit() { }

  getImportanceClassName(
    importance
  ) {
    return this.situationService.getImportanceClassName(importance)
  }

  getImportanceLevelActive(
    importance,
    level
  ) {
    return this.situationService.getPriorityLevelActive(importance, level)
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
