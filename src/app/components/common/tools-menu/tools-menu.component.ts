import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.scss'],
})
export class ToolsMenuComponent implements OnInit {

  @Output()
  onFilterChange = new EventEmitter();

  filterValue = ''

  addingAComment = false
  addingAQuestion = false
  addingAReason = false
  addingARelatedSituation = false
  addingAIdea = false
  addingAExperience = false

  constructor(
    protected menu: MenuController,
    protected router: Router
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

  addQuestion() {
    console.log('Adding a Question...')
    this.addingAQuestion = true
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
    console.log('Adding a Experience...')
    this.addingAExperience = true
  }

  addIdea() {
    this.addingAIdea = true
    this.router.navigate(['/post-idea'])
  }

  addComment() {
    console.log('Adding a Comment...')
    this.addingAComment = true
  }

  addReason() {
    console.log('Adding a Reason...')
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

}
