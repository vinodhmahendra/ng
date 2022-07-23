import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome', // default tag name
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromService: string
  //ActivatedRoute
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }
 
  ngOnInit() {
    //code component is intialized
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldService());
  
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
        // response => console.log(response)
          // response => console.log(response.message)
      );
    console.log("last line of getWelcome Message");
    
    // console.log("get welcome message!");
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log("error.error" +error.error);
    // console.log("error.error" +error.error.message);
    this.welcomeMessageFromService=error.error.message;
  }
  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

}
