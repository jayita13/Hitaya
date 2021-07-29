import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { IUser } from '../hitaya-interfaces/IUser';



import { UserValidationService } from '../hitaya-services/user-validation/user-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  protected aFormGroup: FormGroup;
  status: number;
  errMsg: string;
  msg: string;
  credentials: IUser;


  constructor(private login: UserValidationService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }


  submitLoginForm(form: NgForm) {

    console.log("hello");

    this.credentials = { FIRSTNAME: null, LASTNAME: null, EMAILID: form.value.email, PASSWORD: form.value.password };

    console.log(this.credentials);

    this.login.validateCredentials(this.credentials).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          sessionStorage.setItem('userName', form.value.email);
          this.router.navigate(['/']);
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );

  }

  siteKey: string = "6LeeHskbAAAAALwLAGmFIyNfqezbScX1L7T8jYmQ";
}
