import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { SituationSearchService } from '../../services/situation-search.service';
import { SituationService } from '../../services/situation.service';
import { DateUtilsService } from '../../services/date-utils.service';
import { NumberUtilsService } from '../../services/number-utils.service';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.page.html',
  styleUrls: ['./situation-list.page.scss'],
})
export class SituationListPage implements OnInit {
  myForm: FormGroup
  topic: string

  situations = [{
    createdBy: 'Cool Dad 1978',
    createdAt: new Date().getTime() - 10000000000,
    id: 1,
    importance: 95,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 90
  }, {
    createdBy: 'Some Dad',
    createdAt: new Date().getTime() - 20000000000,
    id: 2,
    importance: 65,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 70
  }, {
    createdBy: 'Some Mom',
    createdAt: new Date().getTime() - 50000000000,
    id: 3,
    importance: 25,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 25
  }, {
    createdBy: 'Super Cool Dad',
    createdAt: new Date().getTime() - 100000000000,
    id: 4,
    importance: 45,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 45
  }, {
    createdBy: 'Super Cool Mom',
    createdAt: new Date().getTime() - 200000000000,
    id: 5,
    importance: 85,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 40
  }, {
    createdBy: 'Fuzzy Mommy',
    createdAt: new Date().getTime() - 300000000000,
    id: 6,
    importance: 35,
    numReplies: 25,
    numQuestions: 1,
    numTestimonials: 1,
    numSuggestions: 1,
    summary: `Lorem ipsum dolor sit amet.`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor finibus nulla, vitae imperdiet
  enim volutpat vitae. Phasellus porttitor venenatis enim sit amet elementum. Vivamus ultricies dui nec nulla.`,
    type: 'situation',
    urgency: 60
  }]

  constructor(
    private activatedRoute: ActivatedRoute,
    private dateUtils: DateUtilsService,
    public navCtrl: NavController,
    private numberUtils: NumberUtilsService,
    private router: Router,
    public situationSearchService: SituationSearchService,
    private situationService: SituationService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      country: new FormControl('', [
        Validators.required
      ])
    })
    this.topic = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getImportanceImageName(
    importance
  ) {
    return this.situationService.getUrgencyImageName(importance)
  }

  getNumberAcronym(
    ranking: number
  ): string {
    return this.numberUtils.getNumberAcronym(ranking)
  }

  add(): void {
    this.router.navigate(['/post-situation'])
  }

  ageOf(createdAt) {
    return this.dateUtils.ageOf(createdAt)
  }

  trackBySituations(situation) {
    return situation.id
  }

  submit(): void {
    let country = this.myForm.value.country
  }

}
