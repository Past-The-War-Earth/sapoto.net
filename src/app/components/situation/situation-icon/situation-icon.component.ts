import { Component, Input, OnInit } from '@angular/core';
import { EisenhowerMatrixService } from '../../../services/eisenhower-matrix.service';
import { SituationService } from '../../../services/situation.service';

@Component({
  selector: 'app-situation-icon',
  templateUrl: './situation-icon.component.html',
  styleUrls: ['./situation-icon.component.scss'],
})
export class SituationIconComponent implements OnInit {

  @Input() mode: 'edit' | 'show'

  @Input() situation;

  @Input() type: 'entry' | 'listing';

  constructor(
    private situationService: SituationService,
    private eisenhowerMatrixService: EisenhowerMatrixService
  ) { }

  ngOnInit() { }

  getImportanceClassName() {
    return this.eisenhowerMatrixService.getImportanceClassName(
      this.situation.eisenhowerMatrix, this.mode
    )
  }

  getUrgencyClassName() {
    return this.eisenhowerMatrixService.getUrgencyClassName(
      this.situation.eisenhowerMatrix, this.mode)
  }


  getUrgencyImageName(
    listing
  ) {
    return this.eisenhowerMatrixService.getUrgencyImageName(
      this.situation.eisenhowerMatrix, this.mode, listing
    )
  }

  getImportanceDisplayValue() {
    return this.eisenhowerMatrixService.getImportanceDisplayValue(
      this.situation.eisenhowerMatrix, this.mode)
  }

  getUrgencyDisplayValue() {
    return this.eisenhowerMatrixService.getUrgencyDisplayValue(
      this.situation.eisenhowerMatrix, this.mode)
  }

}
