import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Situation } from '@sapoto/core';
import { EisenhowerMatrixService } from '../../../services/eisenhower-matrix.service';

@Component({
  selector: 'app-situation-icon',
  templateUrl: './situation-icon.component.html',
  styleUrls: ['./situation-icon.component.scss'],
})
export class SituationIconComponent implements OnInit, OnChanges {

  @Input() mode: 'edit' | 'show'

  @Input() situation: Situation;

  @Input() type: 'entry' | 'listing';

  importancePoints = []
  halfImportancePoint = false
  halfUrgencyPoint = false
  urgencyPoints = []

  constructor(
    private eisenhowerMatrixService: EisenhowerMatrixService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // const situation = changes.situation.currentValue
    if(this.situation && !this.importancePoints.length) {
      this.setStateFromSituation()
    }
  }

  ngOnInit() {
  }

  setStateFromSituation(): void {
    this.importancePoints = []
    let importanceDisplayValue = this.eisenhowerMatrixService.getImportanceDisplayValue(
      this.situation, this.mode)

    const wholeImportanceValue: any = importanceDisplayValue.substring(0, 1)
    if (importanceDisplayValue.endsWith(".5")) {
      this.halfImportancePoint = true
    }

    for (let i = 0; i < wholeImportanceValue; i++) {
      this.importancePoints.push(1)
    }

    this.urgencyPoints = []
    let urgencyDisplayValue = this.eisenhowerMatrixService.getSituationUrgencyDisplayValue(
      this.situation, this.mode)

    const wholeUrgencyValue: any = urgencyDisplayValue.substring(0, 1)
    if (urgencyDisplayValue.endsWith(".5")) {
      this.halfUrgencyPoint = true
    }

    for (let i = 0; i < wholeUrgencyValue; i++) {
      this.urgencyPoints.push(1)
    }
  }

  isVeryLowUrgency() {
    return this.eisenhowerMatrixService.isVeryLowUrgency(
      this.situation, 'situation', this.mode)
  }

  isLowUrgency() {
    return this.eisenhowerMatrixService.isLowUrgency(
      this.situation, 'situation', this.mode)
  }

  isAverageUrgency() {
    return this.eisenhowerMatrixService.isAverageUrgency(
      this.situation, 'situation', this.mode)
  }

  isHighUrgency() {
    return this.eisenhowerMatrixService.isHighUrgency(
      this.situation, 'situation', this.mode)
  }

  isVeryHighUrgency() {
    return this.eisenhowerMatrixService.isVeryHighUrgency(
      this.situation, 'situation', this.mode)
  }

}
