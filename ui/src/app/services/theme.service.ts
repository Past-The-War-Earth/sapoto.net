import { Injectable } from '@angular/core';
import {
  ITheme,
  ThemeApiClient
} from '@dobecause/core'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeApi = new ThemeApiClient()

  constructor() {

  }

  async getThemes(): Promise<ITheme[]> {
    return await this.themeApi.getAllWithTopics()
  }

}
