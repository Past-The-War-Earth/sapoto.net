import { Component, Input, OnInit } from '@angular/core';
import { NumberUtilsService } from '../../../services/number-utils.service';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-idea-stats',
  templateUrl: './idea-stats.component.html',
  styleUrls: ['./idea-stats.component.scss'],
})
export class IdeaStatsComponent implements OnInit {

  @Input() idea;

  constructor(
    private numberUtils: NumberUtilsService,
    private replyService: ReplyService
  ) { }

  ngOnInit() { }

  accentAverage() {
    return this.replyService.getAccentAverage(this.idea)
  }

  accentPercentage() {
    return this.replyService.getAccentPercentage(this.idea)
  }

  getNumberAcronym(
    aNumber: number
  ): string {
    return this.numberUtils.getNumberAcronym(aNumber)
  }

}
