import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';
import {SignUp} from 'src/app/model/sign-up-model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpModal: SignUp;
  loading = false;
  submitted = false;
  error = '';
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(RegExp(/^[a-zA-Z]{1}?\w{5,29}$/))]],
      password: ['', [Validators.required, Validators.pattern(RegExp(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z]).{8,}$/))]],
      email: ['', [Validators.required, Validators.pattern(RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/))]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(RegExp(/\d{10}/))]],
      city: ['', Validators.required],
      state:['', Validators.required],
      zipCode:['', [Validators.required, Validators.pattern(RegExp(/^(\d{5})$/))]]

  });

  }
  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }
    this.signUpModal = new SignUp();
    this.loading = true;
    this.signUpModal.username = this.f.username.value;
    this.signUpModal.password = this.f.password.value;
    this.signUpModal.email = this.f.email.value;
    this.signUpModal.full_name = this.f.firstName.value + " "+ this.f.lastName.value;
    this.signUpModal.phone_number = this.f.phone.value;
    this.signUpModal.city = this.f.city.value;
    this.signUpModal.state = this.f.state.value;
    this.signUpModal.zip = this.f.zipCode.value;

    this.auth.registerUser(this.signUpModal).subscribe(
      (data) => { this.loading = false;
        this.router.navigate(['/login']);
      },
      (error)=> {
        
        if (error.status == 400) {
          this.error = "username already exist"

        } else {        
        this.error = error.name;
        }
        this.loading = false
      }
    )
  }

}
