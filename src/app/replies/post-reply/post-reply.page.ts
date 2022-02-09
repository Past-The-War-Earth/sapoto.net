import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'
import { SuggestionService } from '../../services/suggestion.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.page.html',
  styleUrls: ['./post-reply.page.scss'],
})
export class PostReplyPage implements OnInit {
  
  reply = {
    description: '',
    priority: 20,
    summary: '',
    urgency: 20
  }
  quillModules = {
    'emoji-shortname': true,
    'emoji-toolbar': true,
    'toolbar': [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      ['link', 'image', 'video'],                         // link and image, video
      ['emoji']
    ]
  }

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) { }

  ngOnInit() {
  }

  enterReply() {
    this.router.navigate(['/reply'])
  }

}
