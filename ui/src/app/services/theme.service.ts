import { Injectable } from '@angular/core';
import {
  ITheme,
  ThemeApiClient
} from '@sapoto/core'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeApi = new ThemeApiClient()

  constructor() {

  }

  async getThemes(): Promise<ITheme[]> {
    return []
    // return await this.themeApi.getAllWithTopics()
  }

}
