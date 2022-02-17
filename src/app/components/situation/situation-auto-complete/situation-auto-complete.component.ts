import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelSearchService } from '../../../services/label-search.service';
import { SituationSearchService } from '../../../services/situation-search.service';

@Component({
  selector: 'app-situation-auto-complete',
  templateUrl: './situation-auto-complete.component.html',
  styleUrls: ['./situation-auto-complete.component.scss'],
})
export class SituationAutoCompleteComponent implements OnInit {

  @Input() type
  @Input() placeholder

  @Output() onAdd = new EventEmitter()

  autoCompleteStyles = {
    listItem: {
      padding: '0px'
    }
  }

  searchService

  constructor(
    public labelSearchService: LabelSearchService,
    public situationSearchService: SituationSearchService
  ) { }

  ngOnInit() {
    switch (this.type) {
      case 'entry':
      case 'post':
        this.searchService = this.labelSearchService
        break;
      default:
        this.searchService = this.situationSearchService
        break;
    }
  }

  add(): void {
    this.onAdd.emit()
  }

  isLabel(
    data
  ) {
    return data.type === 'label'
  }

  isSituation(
    data
  ) {
    return data.type === 'situation'
  }

  getLabelText(
    data
  ) {
    let text = data.text
    if (this.type !== 'entry' && this.type !== 'post') {
      text = 'Label: ' + text
    }
    return text
  }

  isLabelsOnly() {
    return this.type === 'entry' || this.type === 'post'
  }

  getSituationText(
    data
  ) {
    return data.text
  }

}
