import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { CountsService } from 'src/app/services/counts.service';

@Component({
  selector: 'app-situation-block',
  templateUrl: './situation-block.component.html',
  styleUrls: ['./situation-block.component.scss'],
})
export class SituationBlockComponent implements OnInit {

  @Input() action
  @Input() actionsTriggerElementId
  @Input() situation
  @Input() type

  @Output() onActionsClick = new EventEmitter()
  @Output() onMatrixClosed = new EventEmitter()

  sharedClicker = new Clicker()

  constructor(
    private countsService: CountsService,
    private dateUtilsService: DateUtilsService,
    private numberUtilsService: NumberUtilsService
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    // const situation = changes.situation.currentValue
    if(this.situation) {
      this.setSituationTransientState()
    }
  }

  private setSituationTransientState() {
    this.countsService.ensureSituationCounts(
      this.situation
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

  showMainAction() {
    return this.type === 'listing'
  }

}
