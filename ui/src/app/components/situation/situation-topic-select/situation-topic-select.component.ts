import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from 'ionic4-auto-complete';
import { TopicSearchService } from 'src/app/services/topic-search.service';

@Component({
  selector: 'app-situation-topic-select',
  templateUrl: './situation-topic-select.component.html',
  styleUrls: ['./situation-topic-select.component.scss'],
})
export class SituationTopicSelectComponent
  implements OnInit, OnDestroy, AfterViewInit {

  @Input() situation

  @Output() onAdd = new EventEmitter()
  @Output() onTopicSelected = new EventEmitter()

  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;

  autoCompleteStyles = {
    listItem: {
      padding: '0px'
    }
  }

  constructor(
    public topicSearchService: TopicSearchService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.situation) {
      this.searchbar.model = this.situation.topic
    }
  }

  ngOnDestroy(): void {
  }

  modelChange() {
    let topic = null
    const selected = this.searchbar.selected
    if (selected && selected.length) {
      topic = selected[0]
    }
    this.situation.topic = topic
    this.onTopicSelected.emit(topic)
  }

  showNoTopicsFound() {
    return this.searchbar.keyword && this.searchbar.keyword.length
  }

  add(): void {
    let topicName = this.searchbar.keyword
    this.topicSearchService.addTopic(topicName).then(topic => {
      this.situation.topic = topic
      this.onAdd.emit(topic)
    })
  }

}
