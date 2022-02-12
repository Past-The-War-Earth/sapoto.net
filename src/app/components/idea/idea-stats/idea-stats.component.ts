import { Component, Input, OnInit } from '@angular/core';
import { NumberUtilsService } from 'src/app/services/number-utils.service';
import { ReplyService } from 'src/app/services/reply.service';

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

  accentPercentage() {
    return this.replyService.getAccentPercentage(this.idea)
  }

  getNumberAcronym(
    ranking: number
  ): string {
    return this.numberUtils.getNumberAcronym(ranking)
  }

}
