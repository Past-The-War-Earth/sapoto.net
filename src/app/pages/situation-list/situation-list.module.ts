import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SituationListPageRoutingModule } from './situation-list-routing.module';

import { SituationListPage } from './situation-list.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    SituationListPageRoutingModule
  ],
  declarations: [SituationListPage]
})
export class SituationListPageModule { }
