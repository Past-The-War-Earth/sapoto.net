import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-tab-icon',
  templateUrl: './suggestion-tab-icon.component.html',
  styleUrls: ['./suggestion-tab-icon.component.scss'],
})
export class SuggestionTabIconComponent implements OnInit {

  @Input() active = true

  constructor() { }

  ngOnInit() { }

}
