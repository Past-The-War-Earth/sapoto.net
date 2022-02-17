import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'
import { QuillService } from '../../../services/quill.service';
import { ReplyService } from '../../../services/reply.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.scss'],
})
export class PostReplyComponent implements OnInit {

  @Input() replyType
  @Input() parent

  @Output() onDone = new EventEmitter()

  visible = true

  reply

  quillModules

  constructor(
    private replyService: ReplyService,
    private quillService: QuillService
  ) {
    this.reply = replyService.getNewReply()
    if (this.replyType) {
      this.reply.designations.push(this.replyType)
    }
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
  }

  enterReply() {
    this.hide()
  }

  cancel() {
    this.hide()
  }

  private hide() {
    this.visible = false
    setTimeout(() => {
      this.onDone.emit()
    })
  }

}
