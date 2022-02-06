import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Quill from 'quill'
import 'quill-emoji/dist/quill-emoji.js'
import { SituationService } from 'src/app/services/situation.service';

@Component({
  selector: 'app-post-situation',
  templateUrl: './post-situation.page.html',
  styleUrls: ['./post-situation.page.scss'],
})
export class PostSituationPage implements OnInit {

  importance = 20
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
    private situationService: SituationService
  ) { }

  ngOnInit() {
  }

  getPriorityLevelActive(
    importance,
    level
  ) {
    return this.situationService.getPriorityLevelActive(importance, level)
  }

  getUrgencyImageName(
    importance
  ) {
    return this.situationService.getUrgencyImageName(importance)
  }

  enterSituation() {
    this.router.navigate(['/situation'])
  }

}
