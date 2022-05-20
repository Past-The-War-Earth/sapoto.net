import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISituationThread } from '@sapoto/main-client';
import { Subscription } from 'rxjs';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
import { parseId } from '@airport/aviation-communication';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.page.html',
  styleUrls: ['./situation.page.scss'],
})
export class SituationPage
  implements OnInit {

  activeReply
  postingReplyType
  replyAction
  situationAction
  showReplyActions = false
  showSituationActions = false

  showToolsMenu = false

  situationThread: ISituationThread

  routeParamsSubscription: Subscription

  constructor(
    private situationThreadService: SituationThreadService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (this.situationThreadService.activeSituationThread) {
      this.situationThread = this.situationThreadService.activeSituationThread
    } else {
      this.routeParamsSubscription = this.route.params.subscribe(params => {
        const situationThreadId = parseId(params['situationThreadId'])
      });
    }
  }

  ionViewDidEnter() {
    this.showToolsMenu = true
  }

  ionViewWillLeave() {
    this.showToolsMenu = false
  }

  filter(
    filterValue: string
  ): void {
    console.log('Filter Value: ' + filterValue)
  }

  onActionsClose() {
    this.showReplyActions = false
    this.showSituationActions = false
  }

  onShowSituationActions() {
    this.activeReply = null
    this.situationAction = null
    this.showSituationActions = true
  }

  onShowReplyActions(
    reply
  ) {
    this.replyAction = null
    this.activeReply = reply
    this.showReplyActions = true
  }

  onReply(
    action
  ) {
    this.postAReply('comment')
  }

  onSituationAction(
    action
  ) {
    this.situationAction = action
  }

  onReplyAction(
    action
  ) {
    this.replyAction = action
  }

  getSituationAction() {
    if (!this.situationAction || this.activeReply) {
      return null
    }
    return this.situationAction
  }

  postAReply(replyType) {
    this.postingReplyType = replyType
  }

  isPostingAReply() {
    return !!this.postingReplyType
  }

  getPostingReplyType() {
    if (this.postingReplyType === 'comment') {
      return null
    }
    return this.postingReplyType
  }

  donePostingAReply() {
    this.postingReplyType = null
  }

}
