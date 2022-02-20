import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtilsService {

  constructor() { }

  getNumberAcronym(
    aNumber: number
  ): string {
    if (aNumber < 1000) {
      return '' + aNumber
    }
    if (aNumber < 1000000) {
      return this.getReplyRankingShort(aNumber, 1000, 'K')
    }
    if (aNumber < 1000000000) {
      return this.getReplyRankingShort(aNumber, 1000000, 'M')
    }
    if (aNumber < 1000000000000) {
      return this.getReplyRankingShort(aNumber, 1000000000, 'B')
    }
    return Math.floor(aNumber / 1000000000000) + 'T'
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

  get5ScaleDisplayValue(
    value: number
  ): string {
    if (value < 1.25) {
      return "1"
    } else if (value < 1.75) {
      return "1.5"
    } else if (value < 2.25) {
      return "2"
    } else if (value < 2.75) {
      return "2.5"
    } else if (value < 3.25) {
      return "3"
    } else if (value < 3.75) {
      return "3.5"
    } else if (value < 4.25) {
      return "4"
    } else if (value < 4.75) {
      return "4.5"
    } else {
      return "5"
    }
  }

  get5ScaleNoDecimalValue(
    value: number
  ): number {
    if (value < 1.75) {
      return 1
    } else if (value < 2.75) {
      return 2
    } else if (value < 3.75) {
      return 3
    } else if (value < 4.75) {
      return 4
    } else {
      return 5
    }
  }

}
