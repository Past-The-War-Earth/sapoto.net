import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtilsService {

  constructor() { }

  getNumberAcronym(
    ranking: number
  ): string {
    if (ranking < 1000) {
      return '' + ranking
    }
    if (ranking < 1000000) {
      return this.getReplyRankingShort(ranking, 1000, 'K')
    }
    if (ranking < 1000000000) {
      return this.getReplyRankingShort(ranking, 1000000, 'M')
    }
    if (ranking < 1000000000000) {
      return this.getReplyRankingShort(ranking, 1000000000, 'B')
    }
    return Math.floor(ranking / 1000000000000) + 'T'
  }

  private getReplyRankingShort(
    ranking: number,
    divider: number,
    suffix: string
  ): string {
    const wholes = Math.floor(ranking / divider)
    const afterDecimal = Math.floor(ranking % divider / 100)
    if (afterDecimal && wholes < 100) {
      return `${wholes}.${afterDecimal}${suffix}`
    } else {
      return `${wholes}${suffix}`
    }
  }

}
