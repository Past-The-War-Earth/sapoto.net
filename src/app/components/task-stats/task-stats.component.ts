import { Component, Input, OnInit } from '@angular/core';
import { NumberUtilsService } from 'src/app/services/number-utils.service';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.scss'],
})
export class TaskStatsComponent implements OnInit {

  @Input() task;

  constructor(
    private numberUtils: NumberUtilsService
  ) { }

  ngOnInit() { }

  accentPercentage(
    totalPoints,
    numUsers
  ) {
    return Math.ceil(totalPoints / numUsers)
  }

  getNumberAcronym(
    ranking: number
  ): string {
    return this.numberUtils.getNumberAcronym(ranking)
  }

}
