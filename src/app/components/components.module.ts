import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationStatsComponent } from './situation-stats/situation-stats.component';
import { TaskStatsComponent } from './task-stats/task-stats.component';
import { ReplyListingComponent } from './reply-listing/reply-listing.component';
import { IonicModule } from '@ionic/angular';
import { ToolsMenuComponent } from './tools-menu/tools-menu.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    ReplyListingComponent,
    SituationStatsComponent,
    TaskStatsComponent,
    ToolsMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    PageHeaderComponent,
    ReplyListingComponent,
    SituationStatsComponent,
    TaskStatsComponent,
    ToolsMenuComponent
  ]
})
export class ComponentsModule { }
