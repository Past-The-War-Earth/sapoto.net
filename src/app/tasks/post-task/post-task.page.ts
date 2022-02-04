import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.page.html',
  styleUrls: ['./post-task.page.scss'],
})
export class PostTaskPage implements OnInit {

  summary: string
  description: string

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
  ) { }

  ngOnInit() {
  }

  enterTask() {
    this.router.navigate(['/task'])
  }

}
