import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { DateUtilsService } from '../../../services/date-utils.service';
import { NumberUtilsService } from '../../../services/number-utils.service';

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

  constructor(
    private dateUtilsService: DateUtilsService,
    private numberUtilsService: NumberUtilsService
  ) { }

  ngOnInit() { }

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
    this.onActionsClick.emit(situation)
  }

  showMainAction() {
    return this.type === 'listing'
  }

}
