import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyPageRoutingModule } from './reply-routing.module';

import { ReplyPage } from './reply.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ReplyPageRoutingModule,
    QuillModule
  ],
  declarations: [ReplyPage]
})
export class ReplyPageModule {}
