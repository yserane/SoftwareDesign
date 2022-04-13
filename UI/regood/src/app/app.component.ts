import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './services/Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regood';
  isUserAuth : Promise<boolean>;
  constructor( private router: Router, private authService: AuthenticationService) {
    this.isUserAuth = this.authService.isUserAuthenticated();
  }
}
