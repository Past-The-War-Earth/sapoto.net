import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clicker } from '../../../utils/Clicker';
import { ReplyService } from '../../../services/reply.service';
import { Reply } from '@sapoto/main';

@Component({
  selector: 'app-reply-actions',
  templateUrl: './reply-actions.component.html',
  styleUrls: ['./reply-actions.component.scss'],
})
export class ReplyActionsComponent implements OnInit {

  @Input() reply: Reply

  @Output() onReply = new EventEmitter()

  @Output() onSelection = new EventEmitter()

  sharedClicker = new Clicker()

  constructor(
    private replyService: ReplyService
  ) { }

  ngOnInit() { }

  onDesignate() {
    this.sharedClicker.click(() => {
      this.onSelection.emit('designate')
    })
  }

  doReply() {
    this.sharedClicker.click(() => {
      this.onReply.emit('reply')
    })
  }

  isIdea() {
    return this.reply.isIdea
  }

  canDesignate() {
    return true
  }

  onReasonAbout() {
    this.sharedClicker.click(() => {
      this.onSelection.emit('reasonAbout')
    })
  }

}
