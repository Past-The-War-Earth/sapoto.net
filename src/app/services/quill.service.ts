import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  quillModulesCommon = {
    'emoji-shortname': true,
    'emoji-toolbar': true
  }

  quillModules320 = {
    ...this.quillModulesCommon,
    'toolbar': [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }

  quillModules375 = {
    ...this.quillModulesCommon,
    'toolbar': [
      ['bold', 'italic'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }

  quillModules428 = {
    ...this.quillModulesCommon,
    'toolbar': [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['emoji']
    ]
  }

  quillModulesWide = {
    ...this.quillModulesCommon,
    'toolbar': [
      ['bold', 'italic'
        , 'underline'
        , 'strike'
      ],        // toggled buttons
      ['blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      ['link', 'image', 'video'],                         // link and image, video
      ['emoji']
    ]
  }

  quillModules = this.quillModules375 as any

  constructor() {
    this.windowResized()
  }



  windowResized() {
    let width = document.body.clientWidth

    if (width <= 320) {
      this.quillModules = this.quillModules320
    } else if (width <= 375) {
      this.quillModules = this.quillModules375
    } else if (width <= 428) {
      this.quillModules = this.quillModules428
    } else {
      this.quillModules = this.quillModulesWide
    }
  }

}
