import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
// import {AuthenticationService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  // constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }
constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.controls.email.value === 'make@mail.com' && this.loginForm.controls.password.value === 'password' && this.loginForm.controls.role.value === 'Maker') {
        this.router.navigate(['list-user']);
    } else if (this.loginForm.controls.email.value === 'check@mail.com' && this.loginForm.controls.password.value === 'password' && this.loginForm.controls.role.value === 'Checker') {
      this.router.navigate(['checker']);
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }



}
