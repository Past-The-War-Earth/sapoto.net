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
    counts: {
      experiences: 7,
      ideas: 3,
      questions: 5,
      replies: 22
    },
    createdAt: new Date().getTime() - 10000000000,
    createdBy: {
      username: 'Awesome Mom',
      ranking: 5000
    },
    eisenhowerMatrix: {
      importance: 95,
      urgency: 90,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 1,
    labels: [{
      id: 1,
      text: 'abc label'
    }],
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
  }, {
    counts: {
      experiences: 5,
      ideas: 2,
      questions: 3,
      replies: 32
    },
    createdAt: new Date().getTime() - 20000000000,
    createdBy: {
      username: 'Cool Dad',
      ranking: 5000
    },
    eisenhowerMatrix: {
      importance: 65,
      urgency: 70,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 2,
    labels: [{
      id: 2,
      text: 'bcd a very, very long label, indeed.'
    }],
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`
  }, {
    counts: {
      experiences: 3,
      ideas: 1,
      questions: 2,
      replies: 12
    },
    createdAt: new Date().getTime() - 50000000000,
    createdBy: {
      username: 'Super Cool Sister',
      ranking: 5000
    },
    eisenhowerMatrix: {
      importance: 25,
      urgency: 25,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 3,
    labels: [{
      id: 1,
      text: 'abc label'
    }, {
      id: 3,
      text: 'cde - THE COOLEST LABEL'
    }],
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
  }, {
    counts: {
      experiences: 5,
      ideas: 3,
      questions: 4,
      replies: 14
    },
    createdBy: {
      username: 'Good Friend',
      ranking: 5000
    },
    createdAt: new Date().getTime() - 100000000000,
    eisenhowerMatrix: {
      importance: 45,
      urgency: 45,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 4,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
  }, {
    counts: {
      experiences: 12,
      ideas: 5,
      questions: 9,
      replies: 42
    },
    createdAt: new Date().getTime() - 200000000000,
    createdBy: {
      username: 'Fuzzy Aunt',
      ranking: 5000
    },
    eisenhowerMatrix: {
      importance: 85,
      urgency: 40,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 5,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
  }, {
    counts: {
      experiences: 5,
      ideas: 4,
      questions: 3,
      replies: 15
    },
    createdAt: new Date().getTime() - 300000000000,
    createdBy: {
      username: 'Fuzzy Uncle',
      ranking: 5000
    },
    eisenhowerMatrix: {
      importance: 35,
      urgency: 60,
      votes: 20,
      user: {
        importance: 0,
        urgency: 0
      }
    },
    id: 6,
    labels: [{
      id: 4,
      text: 'def - An Interesting Label'
    }],
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
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
