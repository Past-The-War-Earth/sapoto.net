import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation-matrix',
  templateUrl: './situation-matrix.component.html',
  styleUrls: ['./situation-matrix.component.scss'],
})
export class SituationMatrixComponent implements OnInit {

  @Input() situation

  @Input() type

  constructor() { }

  ngOnInit() { }

}
