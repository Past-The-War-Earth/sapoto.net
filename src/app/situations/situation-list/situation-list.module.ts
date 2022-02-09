import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SituationListPageRoutingModule } from './situation-list-routing.module';

import { SituationListPage } from './situation-list.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    SituationListPageRoutingModule
  ],
  declarations: [SituationListPage]
})
export class SituationListPageModule { }
