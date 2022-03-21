import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-tab-icon',
  templateUrl: './idea-tab-icon.component.html',
  styleUrls: ['./idea-tab-icon.component.scss'],
})
export class IdeaTabIconComponent implements OnInit {

  @Input() active = true

  constructor() { }

  ngOnInit() { }

}
