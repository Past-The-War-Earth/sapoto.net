import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  ageOf(
    createdAt: number
  ) {
    const now = new Date().getTime()
    const ageInMinutes = Math.floor((now - createdAt) / 60000)
    if (ageInMinutes < 60) {
      if (ageInMinutes === 1) {
        return `1 minute ago`
      } else {
        return `${ageInMinutes} minutes ago`
      }
    }
    const ageInHours = Math.floor(ageInMinutes / 60)
    if (ageInHours < 24) {
      if (ageInHours === 1) {
        return `1 hour ago`
      } else {
        return `${ageInHours} hours ago`
      }
    }
    const ageInDays = Math.floor(ageInHours / 24)
    if (ageInDays < 14) {
      if (ageInDays === 1) {
        return `1 day ago`
      } else {
        return `${ageInDays} days ago`
      }
    }
    if (ageInDays < 31) {
      const weeks = Math.floor(ageInDays / 7);
      if (ageInDays / 7 === 1) {
        return `1 week ago`
      } else {
        return `${weeks} weeks ago`
      }
    }
    if (ageInDays < 365) {
      const months = Math.floor(ageInDays / 31)
      if (months === 1) {
        return `1 month ago`
      } else {
        return `${months} months ago`
      }
    }
    const date = new Date(createdAt)

    return `${(date.getUTCMonth() + 1)}/${date.getUTCDate()}/${(date.getUTCFullYear())}`
  }

}
