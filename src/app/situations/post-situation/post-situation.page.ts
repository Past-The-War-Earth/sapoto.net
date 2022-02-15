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

  situation;

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
    situationService: SituationService
  ) {
    this.situation = situationService.getNewSituation();
  }

  ngOnInit() {
  }

  enterSituation() {
    this.router.navigate(['/situation'])
  }

}
