import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reply, Reply_Type } from '@sapoto/main';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-reply-listing',
  templateUrl: './reply-listing.component.html',
  styleUrls: ['./reply-listing.component.scss'],
})
export class ReplyListingComponent implements OnInit {

  @Input() action;
  @Input() parent: Reply;
  @Input() replies: Reply[];
  @Input() actionsTriggerElementId;

  @Output() onActionsClick = new EventEmitter()

  activeReply: Reply
  filteredReplies: Reply[] = []

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() {
    this.filteredReplies = this.replies
  }

  setReplyTypeFilters(
    replyTypes: Reply_Type[]
  ): void {
    if (!replyTypes.length) {
      this.filteredReplies = this.replies
    } else {
      this.filteredReplies = this.replies.filter(reply => {
        return replyTypes.filter(replyType => {
          switch (replyType) {
            case 'comment':
              return !reply.isExperience
                && !reply.isIdea
                && !reply.isQuestion
            case 'experience':
              return reply.isExperience
            case 'idea':
              return reply.isIdea
            case 'question':
              return reply.isQuestion
          }
        }).length
      })
    }
  }

  sortBy(
    sortType: 'time' | 'postRating' | 'userRanking'
  ) {
    this.replyService.sortBy(sortType, this.filteredReplies)
  }

  /*
  showAll() {
    this.filteredReplies = this.replies;
    this.filter = 'all'
  }
  
  showQuestions() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'question');
    this.filter = 'question'
  }
  
  showComments() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'comment');
    this.filter = 'comment'
  }
  
  showExperiences() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'experience');
    this.filter = 'experience'
  }
  
  showReplies() {
    this.filteredReplies = this.replies.filter(reply => reply.type === 'idea');
    this.filter = 'idea'
  }
  */

  trackByReplies(index, reply) {
    return reply.id
  }

  setDesignatedReply(
    reply
  ) {
    this.activeReply = reply
    this.onActionsClick.emit(reply)
  }

  showReplyTypes() {
    return this.activeReply && this.action === 'designate'
  }

  showIdeaReasons() {
    return this.activeReply && this.activeReply.isIdea
      && this.action === 'reasonAbout'
  }

  replyTypesDone() {
    this.action = null
  }

}
