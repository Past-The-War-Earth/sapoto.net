import { UserAccount } from '@airport/travel-document-checkpoint';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loggedInUser: UserAccount = {
    _localId: 0,
    accountPublicSigningKey: 'bogus@bogus.com',
    username: 'bogusUser123'
  }

  getUser() {
    return this.loggedInUser
  }
}
