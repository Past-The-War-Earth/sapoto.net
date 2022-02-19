import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
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
  sharedClicker = new Clicker()
  situation
  visible = true

  constructor(
    private quillService: QuillService,
    situationService: SituationService
  ) {
    this.situation = situationService.getNewSituation()
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
  }

  enterSituation() {
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
