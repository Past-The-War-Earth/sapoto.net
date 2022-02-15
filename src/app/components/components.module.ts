import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SituationStatsComponent } from './situation/situation-stats/situation-stats.component';
import { IdeaStatsComponent } from './idea/idea-stats/idea-stats.component';
import { ReplyListingComponent } from './reply/reply-listing/reply-listing.component';
import { ToolsMenuComponent } from './common/tools-menu/tools-menu.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { ReplyDesignationIconComponent } from './reply/reply-designation-icon/reply-designation-icon.component';
import { SituationIconComponent } from './situation/situation-icon/situation-icon.component';
import { IdeaTabIconComponent } from './idea/idea-tab-icon/idea-tab-icon.component';
import { IdeaStatsIconComponent } from './idea/idea-stats-icon/idea-stats-icon.component';
import { ReplyTypeLabelsComponent } from './reply/reply-type-labels/reply-type-labels.component';
import { ReplySortOrderComponent } from './reply/reply-sort-order/reply-sort-order.component';
import { SituationMatrixComponent } from './situation/situation-matrix/situation-matrix.component';
import { ReplyTypeOptionsComponent } from './reply/reply-type-options/reply-type-options.component';
import { SituationBlockComponent } from './situation/situation-block/situation-block.component';
import { SituationActionsComponent } from './situation/situation-actions/situation-actions.component';
import { ReplyActionsComponent } from './reply/reply-actions/reply-actions.component';
import { PopoverComponent } from './common/popover/popover.component';
import { ReplyBlockComponent } from './reply/reply-block/reply-block.component';
import { ReplyEntryBarComponent } from './reply/reply-entry-bar/reply-entry-bar.component';
import { QuillModule } from 'ngx-quill';
import { SituationAutoCompleteComponent } from './situation/situation-auto-complete/situation-auto-complete.component';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { SituationLabelsComponent } from './situation/situation-labels/situation-labels.component';
import { MediaRecorderComponent } from './common/media-recorder/media-recorder.component';

@NgModule({
  declarations: [
    IdeaStatsComponent,
    IdeaStatsIconComponent,
    IdeaTabIconComponent,
    MediaRecorderComponent,
    PageHeaderComponent,
    PopoverComponent,
    ReplyActionsComponent,
    ReplyBlockComponent,
    ReplyDesignationIconComponent,
    ReplyEntryBarComponent,
    ReplyListingComponent,
    ReplySortOrderComponent,
    ReplyTypeOptionsComponent,
    ReplyTypeLabelsComponent,
    SituationActionsComponent,
    SituationAutoCompleteComponent,
    SituationBlockComponent,
    SituationIconComponent,
    SituationLabelsComponent,
    SituationMatrixComponent,
    SituationStatsComponent,
    ToolsMenuComponent,
  ],
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QuillModule
  ],
  exports: [
    IdeaStatsIconComponent,
    IdeaStatsComponent,
    IdeaTabIconComponent,
    MediaRecorderComponent,
    PageHeaderComponent,
    PopoverComponent,
    ReplyActionsComponent,
    ReplyBlockComponent,
    ReplyDesignationIconComponent,
    ReplyEntryBarComponent,
    ReplyListingComponent,
    ReplySortOrderComponent,
    ReplyTypeLabelsComponent,
    ReplyTypeOptionsComponent,
    SituationActionsComponent,
    SituationAutoCompleteComponent,
    SituationBlockComponent,
    SituationIconComponent,
    SituationLabelsComponent,
    SituationMatrixComponent,
    SituationStatsComponent,
    ToolsMenuComponent,
  ]
})
export class ComponentsModule { }
