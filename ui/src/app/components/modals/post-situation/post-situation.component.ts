import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'quill-emoji/dist/quill-emoji.js'
import { Clicker } from '../../../utils/Clicker';
import { QuillService } from '../../../services/quill.service';
import { SituationService } from '../../../services/situation.service';
import { Situation } from '@sapoto/core';
import { SituationThreadService } from 'src/app/services/situation-thread.service';
import { NEW_RECORD_FIELDS } from '../../../../../../apps/core/node_modules/@airport/air-traffic-control/lib';

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
    await this.situationThreadService.addSituationThread({
      ...NEW_RECORD_FIELDS,
      ageSuitability: 0,
      counts: null,
      replies: [],
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
