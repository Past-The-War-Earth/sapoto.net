import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
import { QuillService } from '../../../services/quill.service';
import { SituationService } from '../../../services/situation.service';
import { Situation, SituationRating } from '@sapoto/core';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
import { SituationThread } from '@sapoto/main';

@Component({
  selector: 'app-post-situation',
  templateUrl: './post-situation.component.html',
  styleUrls: ['./post-situation.component.scss'],
})
export class PostSituationComponent implements OnInit {

  @Output() onDone = new EventEmitter()

  quillModules
  sharedClicker = new Clicker()
  situation: Situation
  visible = true

  constructor(
    private quillService: QuillService,
    private situationService: SituationService,
    private situationThreadService: SituationThreadService
  ) {
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
    this.situationService.getNewSituation().then(situation =>
      this.situation = situation)
  }

  enterSituation() {
    this.sharedClicker.click(() => {
      this.createSituation().then(() => {
        this.hide()
      })
    })
  }

  async createSituation(): Promise<void> {
    const situationThread = new SituationThread()
    situationThread.situation = this.situation
    const situationRating = new SituationRating()
    situationRating.situation = this.situation
    await this.situationThreadService.addSituationThread(
      situationThread,
      situationRating
    )
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
