import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.scss'],
})
export class ToolsMenuComponent implements OnInit {

  @Input() parent;

  @Output()
  onFilterChange = new EventEmitter();
  @Output()
  onPostReply = new EventEmitter();


  filterValue = ''

  addingAComment = false
  addingAQuestion = false
  addingAReason = false
  addingARelatedSituation = false
  addingAIdea = false
  addingAExperience = false

  constructor(
    protected menu: MenuController,
    protected replyService: ReplyService,
  ) { }

  ngOnInit() { }

  onFilterKeyPress(event) {
    if (event.keyCode === 13) {
      this.menu.close('tools')
      return
    }
    setTimeout(() => {
      this.onFilterChange.emit(this.filterValue)
    }, 100)
  }

  goToQuestions() {
    if (this.addingAQuestion) {
      this.addingAQuestion = false
      return
    }
    console.log('Going to Questions...')
  }

  addRelatedSituation() {
    console.log('Adding a Related Situation...')
    this.addingARelatedSituation = true
  }

  goToRelatedSituations() {
    if (this.addingARelatedSituation) {
      this.addingARelatedSituation = false
      return
    }
    console.log('Going to Related Situations...')
  }

  addExperience() {
    this.addingAExperience = true
    this.onPostReply.emit('experience')
  }

  addIdea() {
    this.addingAIdea = true
    this.onPostReply.emit('idea')
  }

  addComment() {
    this.addingAComment = true
    this.onPostReply.emit('comment')
  }

  addQuestion() {
    this.addingAQuestion = true
    this.onPostReply.emit('question')
  }

  addReason() {
    this.addingAReason = true
  }

  goToAll() {
    console.log('Going to All...')
  }

  goToExperiences() {
    if (this.addingAExperience) {
      this.addingAExperience = false
      return
    }
    console.log('Going to Experiences...')
  }

  goToComments() {
    if (this.addingAComment) {
      this.addingAComment = false
      return
    }
    console.log('Going to Comments...')
  }

  goToReasons() {
    if (this.addingAReason) {
      this.addingAReason = false
      return
    }
    console.log('Going to Reasons...')
  }

  goToIdeas() {
    if (this.addingAIdea) {
      this.addingAIdea = false
      return
    }
    console.log('Going to Ideas...')
  }

  sortChronologically() {
    console.log('Sorting Chronologically...')
  }

  sortByUserRating() {
    console.log('Sorting By User Rating...')
  }

  sortByPostRanking() {
    console.log('Sorting By Post Ranking...')
  }

  canAddAnIdea() {
    return this.replyService.canHaveIdeas(this.parent)
  }

  canAddAnExperience() {
    return this.replyService.canHaveExperiences(this.parent)
  }

  canAddAQuestion() {
    return this.replyService.canHaveQuestions(this.parent)
  }

}
