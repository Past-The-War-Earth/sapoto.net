import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import 'quill-emoji/dist/quill-emoji.js'
import { QuillService } from '../../../services/quill.service';
import { SituationService } from '../../../services/situation.service';

@Component({
  selector: 'app-post-situation',
  templateUrl: './post-situation.component.html',
  styleUrls: ['./post-situation.component.scss'],
})
export class PostSituationComponent implements OnInit {

  @Output() onDone = new EventEmitter()

  quillModules
  situation
  visible = true

  constructor(
    private quillService: QuillService,
    private router: Router,
    situationService: SituationService
  ) {
    this.situation = situationService.getNewSituation()
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
  }

  enterSituation() {
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
