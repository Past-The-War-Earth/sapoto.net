import { Component, Input, OnInit } from '@angular/core';
import { NumberUtilsService } from 'src/app/services/number-utils.service';

@Component({
  selector: 'app-suggestion-stats',
  templateUrl: './suggestion-stats.component.html',
  styleUrls: ['./suggestion-stats.component.scss'],
})
export class SuggestionStatsComponent implements OnInit {

  @Input() suggestion;

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
