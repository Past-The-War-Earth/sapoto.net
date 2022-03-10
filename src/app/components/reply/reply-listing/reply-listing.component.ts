import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-reply-listing',
  templateUrl: './reply-listing.component.html',
  styleUrls: ['./reply-listing.component.scss'],
})
export class ReplyListingComponent implements OnInit {

  @Input() action;
  @Input() parent;
  @Input() replies;
  @Input() actionsTriggerElementId;

  @Output() onActionsClick = new EventEmitter()

  activeReply
  filteredReplies = []

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() {
    this.filteredReplies = this.replies
  }

  setReplyTypeFilters(
    replyTypeDesignations
  ) {
    if (!replyTypeDesignations.length) {
      this.filteredReplies = this.replies
    } else {
      this.filteredReplies = this.replies.filter(reply => {
        return !!reply.designations.filter(designation => {
          return replyTypeDesignations.indexOf(designation) > -1
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
    return this.activeReply && this.replyService.hasADesignation('idea', this.activeReply)
      && this.action === 'reasonAbout'
  }

  replyTypesDone() {
    this.action = null
  }

}
