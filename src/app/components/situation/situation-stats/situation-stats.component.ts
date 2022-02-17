import { Component, Input, OnInit } from '@angular/core';
import { NumberUtilsService } from '../../../services/number-utils.service';

@Component({
  selector: 'app-situation-stats',
  templateUrl: './situation-stats.component.html',
  styleUrls: ['./situation-stats.component.scss'],
})
export class SituationStatsComponent implements OnInit {

  @Input() situation

  constructor(
    private numberUtils: NumberUtilsService
  ) { }

  ngOnInit() { }

  getNumberAcronym(
    count: number
  ) {
    return this.numberUtils.getNumberAcronym(count)
  }

}
