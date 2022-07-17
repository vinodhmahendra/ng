import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    console.log('before ' + this.IsUserLoggedIn());
    if ( username === 'vinodh' && password === 'OmgPassword!'){
      //save user in sessionStorage
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ', this.IsUserLoggedIn());
      return true;
    }
    return false;
  }

  IsUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
