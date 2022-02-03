import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationStatsComponent } from './situation-stats/situation-stats.component';

@NgModule({
  declarations: [
    SituationStatsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SituationStatsComponent
  ]
})
export class ComponentsModule { }
