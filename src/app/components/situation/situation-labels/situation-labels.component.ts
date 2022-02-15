import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation-labels',
  templateUrl: './situation-labels.component.html',
  styleUrls: ['./situation-labels.component.scss'],
})
export class SituationLabelsComponent implements OnInit {

  @Input() situation;

  constructor() { }

  ngOnInit() {}

  trackByLabels(index, label) {
    return label.id
  }

}
