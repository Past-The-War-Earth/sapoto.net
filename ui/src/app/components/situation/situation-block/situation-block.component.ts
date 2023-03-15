import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { Router } from '@angular/router';
import { SituationThread } from '@sapoto/main';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
@Component({
  selector: 'app-situation-block',
  templateUrl: './situation-block.component.html',
  styleUrls: ['./situation-block.component.scss'],
})
export class SituationBlockComponent {

  @Input() action
  @Input() actionsTriggerElementId
  @Input() situationThread: SituationThread
  @Input() type

  @Output() onActionsClick = new EventEmitter()
  @Output() onMatrixClosed = new EventEmitter()

  sharedClicker = new Clicker()

  constructor(
    private dateUtilsService: DateUtilsService,
    private numberUtilsService: NumberUtilsService,
    private router: Router,
    private situationThreadService: SituationThreadService
  ) { }

  showSituationMatrix() {
    return this.action === 'size'
  }

  situationMatrixClosed() {
    this.action = null
    this.onMatrixClosed.emit()
  }

  ageOf(
    timestamp
  ) {
    return this.dateUtilsService.ageOf(timestamp)
  }

  getNumberAcronym(
    aNumber
  ) {
    return this.numberUtilsService.getNumberAcronym(aNumber)
  }

  actionsClicked(
    situation
  ) {
    this.sharedClicker.click(() => {
      this.onActionsClick.emit(situation)
    })
  }

  goToSituation() {
    this.situationThreadService.activeSituationThread = this.situationThread
    this.router.navigate(['/situation', this.situationThread.id]);
  }

  showMainAction() {
    return this.type === 'listing'
  }

}
