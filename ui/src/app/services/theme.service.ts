import { Injectable } from '@angular/core';
import {
  Theme,
  ThemeApi,
} from '@sapoto/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeApi = new ThemeApi()

  constructor() {
  }

  async getThemes(): Promise<Theme[]> {
    const themes = await this.themeApi.getAllWithTopics()

    return themes
  }

}
