import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-matrix',
  templateUrl: './suggestion-matrix.component.html',
  styleUrls: ['./suggestion-matrix.component.scss'],
})
export class SuggestionMatrixComponent implements OnInit {

  @Input() suggestion

  @Input() type

  constructor() { }

  ngOnInit() { }

}
