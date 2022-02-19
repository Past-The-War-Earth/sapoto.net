import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
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

  quillModules
  reply
  sharedClicker = new Clicker()
  visible = true

  constructor(
    replyService: ReplyService,
    private quillService: QuillService
  ) {
    this.reply = replyService.getNewReply()
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
    if (this.replyType) {
      this.reply.designations.push(this.replyType)
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
