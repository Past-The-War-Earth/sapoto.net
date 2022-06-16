import { Component, OnInit } from '@angular/core';
import { Reply, ReplyType } from '@sapoto/main';
import 'quill-emoji/dist/quill-emoji.js'
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.page.html',
  styleUrls: ['./reply.page.scss'],
})
export class ReplyPage
  implements OnInit {

  activeReply: Reply
  replyAction
  showReplyActions = false
  postingReplyType: ReplyType

  reply: Reply;

  replies: Reply[] = []

  showToolsMenu = false

  constructor(
    private dateUtils: DateUtilsService
  ) {
  }

  ngOnInit() {
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
  }

  onShowReplyActions(
    reply
  ) {
    this.replyAction = null
    this.activeReply = reply
    this.showReplyActions = true
  }

  onReplyAction(
    action
  ) {
    this.replyAction = action
  }

  ageOf(
    createdAt: number
  ) {
    return this.dateUtils.ageOf(createdAt)
  }

  areDesignationsOpen() {
    return this.activeReply && this.reply.uuId === this.activeReply.uuId
  }

  getActiveActionsReplyUuId(): string {
    if (!this.activeReply) {
      return null
    }

    return this.activeReply.uuId
  }

  getReplyAction() {
    if (!this.replyAction || this.getActiveActionsReplyUuId() !== this.reply.uuId) {
      return null
    }
    return this.replyAction
  }

  postAReply(replyType) {
    this.postingReplyType = replyType
  }

  isPostingAReply() {
    return !!this.postingReplyType
  }

  getPostingReplyType(): ReplyType {
    if (this.postingReplyType.type === 'comment') {
      return null
    }
    return this.postingReplyType
  }

  donePostingAReply() {
    this.postingReplyType = null
  }
}