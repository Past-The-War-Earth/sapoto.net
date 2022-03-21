import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-stats-icon',
  templateUrl: './idea-stats-icon.component.html',
  styleUrls: ['./idea-stats-icon.component.scss'],
})
export class IdeaStatsIconComponent implements OnInit {

  @Input() selected

  constructor() { }

  ngOnInit() { }

}
