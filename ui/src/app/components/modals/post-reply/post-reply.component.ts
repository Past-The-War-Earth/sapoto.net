import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
import { QuillService } from '../../../services/quill.service';
import { ReplyService } from '../../../services/reply.service';
import { Reply, Reply_Type, SituationThread } from '@sapoto/main';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.scss'],
})
export class PostReplyComponent implements OnInit {

  @Input() replyType: Reply_Type
  @Input() parent: Reply
  @Input() situationThread: SituationThread

  @Output() onDone = new EventEmitter()

  quillModules
  reply: Reply
  sharedClicker = new Clicker()
  visible = true

  constructor(
    replyService: ReplyService,
    private quillService: QuillService
  ) {
    this.reply = replyService.getNewReply(this.situationThread)
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
    switch (this.replyType) {
      case 'comment':
        break
      case 'experience':
        this.reply.isExperience = true
        break
      case 'idea':
        this.reply.isIdea = true
        break
      case 'question':
        this.reply.isQuestion = true
        break
    }
  }

  enterReply() {
    this.sharedClicker.click(() => {
      this.hide()
    })
  }

  cancel() {
    this.sharedClicker.click(() => {
      this.hide()
    })
  }

  private hide() {
    this.visible = false
    setTimeout(() => {
      this.onDone.emit()
    })
  }

}
