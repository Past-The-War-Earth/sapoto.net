import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostReplyPageRoutingModule } from './post-reply-routing.module';

import { PostReplyPage } from './post-reply.page';
import { QuillModule } from 'ngx-quill';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    PostReplyPageRoutingModule,
    QuillModule.forRoot()
  ],
  declarations: [PostReplyPage]
})
export class PostReplyPageModule { }
