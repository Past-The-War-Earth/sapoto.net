import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-actions',
  templateUrl: './reply-actions.component.html',
  styleUrls: ['./reply-actions.component.scss'],
})
export class ReplyActionsComponent implements OnInit {

  @Input() reply

  @Output() onSelection = new EventEmitter()

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() { }

  onDesignate() {
    this.onSelection.emit('designate')
  }

  isIdea() {
    return this.replyService.isIdea(this.reply)
  }

  onReasonAbout() {
    this.onSelection.emit('reasonAbout')
  }

}
