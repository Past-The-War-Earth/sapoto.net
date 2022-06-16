import { User } from '@airport/travel-document-checkpoint';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loggedInUser: User = {
    email: 'bogus@bogus.com',
    username: 'bogusUser123'
  }

  getUser() {
    return this.loggedInUser
  }
}
