import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QuillModule } from 'ngx-quill'

import { PostSituationPageRoutingModule } from './post-situation-routing.module';

import { PostSituationPage } from './post-situation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostSituationPageRoutingModule,
    QuillModule.forRoot()
  ],
  declarations: [PostSituationPage]
})
export class PostSituationPageModule { }
