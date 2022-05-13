import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
import { QuillService } from '../../../services/quill.service';
import { SituationService } from '../../../services/situation.service';
import { ISituation } from '@sapoto/core-client';
import { SituationThreadService } from 'src/app/services/situation-thread.service';

@Component({
  selector: 'app-post-situation',
  templateUrl: './post-situation.component.html',
  styleUrls: ['./post-situation.component.scss'],
})
export class PostSituationComponent implements OnInit {

  @Output() onDone = new EventEmitter()

  quillModules
  sharedClicker = new Clicker()
  situation: ISituation
  visible = true

  constructor(
    private quillService: QuillService,
    private situationService: SituationService,
    private situationThreadService: SituationThreadService
  ) {
    this.situation = situationService.getNewSituation()
    this.quillModules = this.quillService.quillModules
  }

  ngOnInit() {
  }

  enterSituation() {
    this.sharedClicker.click(() => {
      this.createSituation().then(() => {
        this.hide()
      })
    })
  }

  async createSituation(): Promise<void> {
    await this.situationThreadService.addSituationThread({
      actor: null,
      actorRecordId: null,
      ageSuitability: 0,
      repository: null,
      situation: this.situation
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
