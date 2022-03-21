import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from 'ionic4-auto-complete';
import { Subject, Subscription } from 'rxjs';
import { LabelSearchService } from '../../../services/label-search.service';
import { SituationSearchService } from '../../../services/situation-search.service';

@Component({
  selector: 'app-situation-auto-complete',
  templateUrl: './situation-auto-complete.component.html',
  styleUrls: ['./situation-auto-complete.component.scss'],
})
export class SituationAutoCompleteComponent
  implements OnInit, OnDestroy, AfterViewInit {

  @Input() labelRemoved: Subject<any>
  @Input() placeholder
  @Input() situation
  @Input() type

  @Output() onAdd = new EventEmitter()

  @Output() onLabelSelected = new EventEmitter()

  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;
  /*
   */

  autoCompleteStyles = {
    listItem: {
      padding: '0px'
    }
  }
  isLabelSearch = false
  labelRemovedSubscription: Subscription
  searchService


  constructor(
    public labelSearchService: LabelSearchService,
    public situationSearchService: SituationSearchService
  ) { }

  ngOnInit() {
    if (this.labelRemoved) {
      this.labelRemovedSubscription
        = this.labelRemoved.subscribe(label => this.removeLabel(label))
    }
    switch (this.type) {
      case 'entry':
      case 'post':
        this.searchService = this.labelSearchService
        this.isLabelSearch = true
        break;
      default:
        this.searchService = this.situationSearchService
        break;
    }
  }

  ngAfterViewInit() {
    if (this.situation) {
      this.searchbar.model = this.situation.labels
    }
  }

  ngOnDestroy(): void {
    if (this.labelRemovedSubscription) {
      this.labelRemovedSubscription.unsubscribe()
    }
  }

  removeLabel(
    label
  ) {
    this.searchbar.removeItem(label)
  }

  itemChanged() {
    this.onLabelSelected.emit(this.searchbar.model)
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
