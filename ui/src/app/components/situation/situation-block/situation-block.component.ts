import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { CountsService } from 'src/app/services/counts.service';
import { Router } from '@angular/router';
import { ISituationThread } from '@sapoto/main-client';
import { SituationService } from 'src/app/services/situation.service';
import { SituationThreadService } from 'src/app/services/situation-thread.service';

@Component({
  selector: 'app-situation-block',
  templateUrl: './situation-block.component.html',
  styleUrls: ['./situation-block.component.scss'],
})
export class SituationBlockComponent implements OnInit {

  @Input() action
  @Input() actionsTriggerElementId
  @Input() situationThread: ISituationThread
  @Input() type

  @Output() onActionsClick = new EventEmitter()
  @Output() onMatrixClosed = new EventEmitter()

  sharedClicker = new Clicker()

  constructor(
    private countsService: CountsService,
    private dateUtilsService: DateUtilsService,
    private numberUtilsService: NumberUtilsService,
    private router: Router,
    private situationThreadService: SituationThreadService
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    // const situation = changes.situation.currentValue
    if (this.situationThread) {
      this.setSituationTransientState()
    }
  }

  private setSituationTransientState() {
    this.countsService.ensureSituationCounts(
      this.situationThread
    )
  }

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
    this.router.navigate(['/situation', this.situationThread.repository.id,
      this.situationThread.actor.id, this.situationThread.actorRecordId]);
  }

  showMainAction() {
    return this.type === 'listing'
  }

}
