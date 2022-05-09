import { Injectable } from '@angular/core';
import {
  ITheme,
  ThemeApiClient,
} from '@sapoto/core-client';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeApi = new ThemeApiClient()

  constructor() {
  }

  async getThemes(): Promise<ITheme[]> {
    const themes = await this.themeApi.getAllWithTopics()

    return themes
  }

}
