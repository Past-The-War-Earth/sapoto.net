import { Component, Input, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';
import { SituationService } from '../../../services/situation.service';

@Component({
  selector: 'app-reply-designation-icon',
  templateUrl: './reply-designation-icon.component.html',
  styleUrls: ['./reply-designation-icon.component.scss'],
})
export class ReplyDesignationIconComponent implements OnInit {

  @Input() reply

  @Input() type: 'entry' | 'listing'

  constructor(
    private replyService: ReplyService,
    private situationService: SituationService,
  ) { }

  ngOnInit() {
  }

  getPriorityClassName(
    priority
  ) {
    return this.situationService.getPriorityClassName(priority)
  }

  /*
    getPriorityLevelActive(
      priority,
      level
    ) {
      return this.situationService.getPriorityLevelActive(priority, level)
    }
  
    getUrgencyClassName(
      urgency
    ) {
      return this.situationService.getUrgencyClassName(urgency)
    }
  */

  getUrgencyImageName(
    urgency,
    listing
  ) {
    return this.situationService.getUrgencyImageName(urgency, listing)
  }

  isComment() {
    return this.replyService.isComment(this.reply)
  }

  isQuestion() {
    return this.replyService.isQuestion(this.reply)
  }

  isIdea() {
    return this.replyService.isIdea(this.reply)
  }

  isExperience() {
    return this.replyService.isExperience(this.reply)
  }

  isAQuestion() {
    return this.replyService.hasADesignation('question', this.reply)
  }

}
