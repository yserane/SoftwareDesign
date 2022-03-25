import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regood';
  showTok = false;
  token :string;
  constructor( private router: Router) {

  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  navigateToSignUp(){
    this.router.navigate(['/signup']);

  }
  showToken(){
    this.showTok = true;
    this.token = localStorage.getItem("userToken");


  }
}
