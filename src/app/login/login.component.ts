import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vinodh';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter()
  //Dependency Injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if ( this.username === 'vinodh' && this.password === 'OmgPassword!'){
      //redirect to welcome Page
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
   }

}
