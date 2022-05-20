import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { SituationSearchService } from '../../services/situation-search.service';
import { ITopic } from '@sapoto/core-client';
import { SituationService } from 'src/app/services/situation.service';
import { TopicSearchService } from 'src/app/services/topic-search.service';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
import { ISituationThread } from '@sapoto/main-client';
import { encodeId } from '@airport/aviation-communication';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.page.html',
  styleUrls: ['./situation-list.page.scss'],
})
export class SituationListPage implements OnInit {

  activeSituationThread
  myForm: FormGroup
  postingASituation = false
  situationAction
  showSituationActions = false
  topic: ITopic

  situationThreads: ISituationThread[]

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
    index,
    situationThread: ISituationThread
  ) {
    return encodeId(situationThread)
  }

  onActionsClose() {
    this.showSituationActions = false
  }

  getSituationAction(
    situationThread: ISituationThread
  ) {
    if (!this.situationAction || !this.activeSituationThread
      || this.activeSituationThread.repository.id !== situationThread.repository.id
      || this.activeSituationThread.actor.id !== situationThread.actor.id
      || this.activeSituationThread.actorRecordId !== situationThread.actorRecordId) {
      return null
    }
    return this.situationAction
  }

  onShowSituationActions(
    situationThread: ISituationThread
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
