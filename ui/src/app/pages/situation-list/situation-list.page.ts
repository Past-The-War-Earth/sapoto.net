import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { SituationSearchService } from '../../services/situation-search.service';
import { Topic } from '@sapoto/core';
import { SituationService } from 'src/app/services/situation.service';
import { TopicSearchService } from 'src/app/services/topic-search.service';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
import { SituationThread } from '@sapoto/main';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.page.html',
  styleUrls: ['./situation-list.page.scss'],
})
export class SituationListPage implements OnInit {

  activeSituationThread: SituationThread
  myForm: FormGroup
  postingASituation = false
  situationAction
  showSituationActions = false
  topic: Topic

  situationThreads: SituationThread[]

  constructor(
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    public situationSearchService: SituationSearchService,
    public situationService: SituationService,
    public situationThreadService: SituationThreadService,
    public topicSearchService: TopicSearchService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const topicId = params['topicId']
      this.situationThreadService.getTopicSituationThreads(topicId).then(
        situationThreads => this.situationThreads = situationThreads)
      this.topicSearchService.getById(topicId).then(topic => {
        this.topic = topic
      })
    });
    this.myForm = new FormGroup({
      country: new FormControl('', [
        Validators.required
      ])
    })
  }

  trackBySituations(
    _index,
    situationThread: SituationThread
  ) {
    return situationThread.id
  }

  onActionsClose() {
    this.showSituationActions = false
  }

  getSituationAction(
    situationThread: SituationThread
  ) {
    if (!this.situationAction || !this.activeSituationThread
      || this.activeSituationThread.id !== situationThread.id) {
      return null
    }
    return this.situationAction
  }

  onShowSituationActions(
    situationThread: SituationThread
  ) {
    this.situationAction = null
    this.activeSituationThread = situationThread
    this.showSituationActions = true
  }

  onSituationAction(
    action
  ) {
    this.situationAction = action
  }

  postASituation() {
    this.postingASituation = true
  }

  isPostingASituation() {
    return !!this.postingASituation
  }

  donePostingASituation() {
    this.postingASituation = false
  }

}
