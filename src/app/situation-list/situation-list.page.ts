import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SituationSearchService } from '../services/situation-search.service';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.page.html',
  styleUrls: ['./situation-list.page.scss'],
})
export class SituationListPage implements OnInit {
  myForm: FormGroup
  topic: string

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

  submit(): void {
    let country = this.myForm.value.country
  }

}
