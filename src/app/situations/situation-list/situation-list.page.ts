import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { SituationSearchService } from '../../services/situation-search.service';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.page.html',
  styleUrls: ['./situation-list.page.scss'],
})
export class SituationListPage implements OnInit {

  activeSituation
  situationAction
  showSituationActions = false
  myForm: FormGroup
  topic: string


  situations = [{
    createdAt: new Date().getTime() - 10000000000,
    createdBy: {
      username: 'Awesome Mom',
      ranking: 5000
    },
    id: 1,
    importance: 95,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 90
  }, {
    createdAt: new Date().getTime() - 20000000000,
    createdBy: {
      username: 'Cool Dad',
      ranking: 5000
    },
    id: 2,
    importance: 65,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 70
  }, {
    createdBy: {
      username: 'Super Cool Sister',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 50000000000,
    id: 3,
    importance: 25,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 25
  }, {
    createdBy: {
      username: 'Good Friend',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 100000000000,
    id: 4,
    importance: 45,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 45
  }, {
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 200000000000,
    id: 5,
    importance: 85,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 40
  }, {
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 300000000000,
    id: 6,
    importance: 35,
    numReplies: 25,
    numQuestions: 1,
    numExperiences: 1,
    numIdeas: 1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 60
  }]

  constructor(
    private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
    public situationSearchService: SituationSearchService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      country: new FormControl('', [
        Validators.required
      ])
    })
    this.topic = this.activatedRoute.snapshot.paramMap.get('id');
  }

  add(): void {
    this.router.navigate(['/post-situation'])
  }

  trackBySituations(situation) {
    return situation.id
  }

  onActionsClose() {
    this.showSituationActions = false
  }

  getSituationAction(
    situation
  ) {
    if (!this.situationAction || !this.activeSituation
      || this.activeSituation.id !== situation.id) {
      return null
    }
    return this.situationAction
  }

  onShowSituationActions(
    situation
  ) {
    this.situationAction = null
    this.activeSituation = situation
    this.showSituationActions = true
  }

  onSituationAction(
    action
  ) {
    this.situationAction = action
  }

}
