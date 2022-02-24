import { Component, Input, OnInit } from '@angular/core';
import { EisenhowerMatrixService } from '../../../services/eisenhower-matrix.service';

@Component({
  selector: 'app-situation-icon',
  templateUrl: './situation-icon.component.html',
  styleUrls: ['./situation-icon.component.scss'],
})
export class SituationIconComponent implements OnInit {

  @Input() mode: 'edit' | 'show'

  @Input() situation;

  @Input() type: 'entry' | 'listing';

  importanceStars

  constructor(
    private eisenhowerMatrixService: EisenhowerMatrixService
  ) { }

  ngOnInit() {
    this.importanceStars = []
    let numberOfStars = this.eisenhowerMatrixService.getImportanceNoDecimalValue(
      this.situation.eisenhowerMatrix, this.mode)

    for (let i = 0; i < numberOfStars; i++) {
      this.importanceStars.push(1)
    }
  }

  getImportanceDisplayValue() {
    return this.eisenhowerMatrixService.getImportanceDisplayValue(
      this.situation.eisenhowerMatrix, this.mode)
  }

  getUrgencyDisplayValue() {
    return this.eisenhowerMatrixService.getUrgencyDisplayValue(
      this.situation.eisenhowerMatrix, this.mode)
  }

  isVeryLowUrgency() {
    return this.eisenhowerMatrixService.isVeryLowUrgency(
      this.situation.eisenhowerMatrix, this.mode)
  }

  isLowUrgency() {
    return this.eisenhowerMatrixService.isLowUrgency(
      this.situation.eisenhowerMatrix, this.mode)
  }

  isAverageUrgency() {
    return this.eisenhowerMatrixService.isAverageUrgency(
      this.situation.eisenhowerMatrix, this.mode)
  }

  isHighUrgency() {
    return this.eisenhowerMatrixService.isHighUrgency(
      this.situation.eisenhowerMatrix, this.mode)
  }

  isVeryHighUrgency() {
    return this.eisenhowerMatrixService.isVeryHighUrgency(
      this.situation.eisenhowerMatrix, this.mode)
  }

}
