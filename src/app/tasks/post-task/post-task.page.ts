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
  priority: number = 20
  urgency: number = 20

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

  getUrgencyClass() {
    switch (this.urgency) {
      case 20:
        return "very-low-urgency"
      case 40:
        return "low-urgency"
      case 60:
        return "average-urgency"
      case 80:
        return "high-urgency"
      case 100:
        return "very-high-urgency"
    }
  }

  getPriorityClass() {
    switch (this.priority) {
      case 20:
        return "very-low-priority"
      case 40:
        return "low-priority"
      case 60:
        return "average-priority"
      case 80:
        return "high-priority"
      case 100:
        return "very-high-priority"
    }
  }

}
