import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'
import { TaskService } from 'src/app/services/task.service';

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
    private taskService: TaskService
  ) { }

  ngOnInit() {
  }

  enterTask() {
    this.router.navigate(['/task'])
  }

  getUrgencyClass(
    urgency
  ) {
    return this.taskService.getUrgencyClass(urgency)
  }

  getPriorityClass(
    priority
  ) {
    return this.taskService.getPriorityClass(priority)
  }

}
