import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import {login} from 'src/app/model/login-model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModal: login;
  loading = false;
  submitted = false;
  error = '';


  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loginModal = new login();
    this.loading = true;
    this.loginModal.username = this.f.username.value;
    this.loginModal.password = this.f.password.value;

    this.auth.login(this.loginModal).subscribe(
      (data) =>  {alert("it worked! ID =\n "+ data.token);
    this.loading = false; 
    localStorage.setItem('userToken', data.token);

  
  },
      (error)=> this.error = error.name
    )
  }
}
