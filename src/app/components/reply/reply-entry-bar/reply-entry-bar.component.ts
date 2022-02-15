import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-reply-entry-bar',
  templateUrl: './reply-entry-bar.component.html',
  styleUrls: ['./reply-entry-bar.component.scss'],
})
export class ReplyEntryBarComponent implements OnInit, OnDestroy {

  reply

  // resizeHandle = () => {
  //   this.windowResized()
  // }

  testString = 'hello'

  quillModules

  quillModules320 = {
    'emoji-shortname': true,
    'emoji-toolbar': true,
    'toolbar': [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }



  quillModules375 = {
    'emoji-shortname': true,
    'emoji-toolbar': true,
    'toolbar': [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }


  quillModules428 = {
    'emoji-shortname': true,
    'emoji-toolbar': true,
    'toolbar': [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }

  quillModulesWide = {
    'emoji-shortname': true,
    'emoji-toolbar': true,
    'toolbar': [
      ['bold', 'italic'
        , 'underline'
        , 'strike'
      ],        // toggled buttons
      ['blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      ['link', 'image', 'video'],                         // link and image, video
      ['emoji']
    ]
  }

  constructor(
    private replyService: ReplyService
  ) {
    this.reply = replyService.getNewReply()
  }

  windowResized() {
    let width = document.body.clientWidth

    if (width <= 320) {
      this.quillModules = this.quillModules320
    } else if (width <= 375) {
      this.quillModules = this.quillModules375
    } else if (width <= 428) {
      this.quillModules = this.quillModules428
    } else {
      this.quillModules = this.quillModulesWide
    }

    // console.log('Width: ' + width + ', Height: ' + height)
  }

  ngOnInit() {
    this.windowResized()
    // window.addEventListener("resize", this.resizeHandle);
  }

  ngOnDestroy(): void {
    // window.removeEventListener("resize", this.resizeHandle);
  }

}
