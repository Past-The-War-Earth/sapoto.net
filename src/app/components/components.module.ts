import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SituationStatsComponent } from './situation/situation-stats/situation-stats.component';
import { SuggestionStatsComponent } from './suggestion/suggestion-stats/suggestion-stats.component';
import { ReplyListingComponent } from './reply/reply-listing/reply-listing.component';
import { ToolsMenuComponent } from './common/tools-menu/tools-menu.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { SuggestionIconComponent } from './suggestion/suggestion-icon/suggestion-icon.component';
import { SituationIconComponent } from './situation/situation-icon/situation-icon.component';
import { SuggestionTabIconComponent } from './suggestion/suggestion-tab-icon/suggestion-tab-icon.component';
import { SuggestionStatsIconComponent } from './suggestion/suggestion-stats-icon/suggestion-stats-icon.component';
import { ReplyTypeLabelsComponent } from './reply-type-labels/reply-type-labels.component';
import { ReplySortOrderComponent } from './reply/reply-sort-order/reply-sort-order.component';
import { SituationMatrixComponent } from './situation/situation-matrix/situation-matrix.component';
import { SuggestionMatrixComponent } from './suggestion/suggestion-matrix/suggestion-matrix.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    ReplyListingComponent,
    ReplySortOrderComponent,
    ReplyTypeLabelsComponent,
    SituationIconComponent,
    SituationMatrixComponent,
    SituationStatsComponent,
    SuggestionIconComponent,
    SuggestionMatrixComponent,
    SuggestionStatsComponent,
    SuggestionStatsIconComponent,
    ToolsMenuComponent,
    SuggestionTabIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    PageHeaderComponent,
    ReplyListingComponent,
    ReplySortOrderComponent,
    ReplyTypeLabelsComponent,
    SituationIconComponent,
    SituationMatrixComponent,
    SituationStatsComponent,
    SuggestionIconComponent,
    SuggestionMatrixComponent,
    SuggestionStatsIconComponent,
    SuggestionStatsComponent,
    ToolsMenuComponent,
    SuggestionTabIconComponent,
  ]
})
export class ComponentsModule { }
