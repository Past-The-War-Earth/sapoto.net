import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SituationPageRoutingModule } from './situation-routing.module';

import { SituationPage } from './situation.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    SituationPageRoutingModule
  ],
  declarations: [
    SituationPage
  ]
})
export class SituationPageModule { }
